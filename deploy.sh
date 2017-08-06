#!/bin/bash

set -e
function echogr {
	echo -e \\033[0\;32m$@\\033[0m
}

echogr Generating hosts files.
mkdir output
node generate.js hosts.yml $(git show -s --format=%cd --date=short) output

if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
	echogr Importing SSH key.
	base64 -d <<< $SSH_KEY > ~/.ssh/id_ed25519
	chmod 600 ~/.ssh/id_ed25519

	echogr Importing GPG key.
	base64 -d <<< $GPG_KEY | gpg --import

	echogr Cloning master branch.
	git clone git@github.com:$TRAVIS_REPO_SLUG master

	cp output/* master/
	cd master
	if [ -n "$(git status --porcelain)" ]; then
		echogr Changes detected.

		echogr Configuring git.
		git config user.name $COMMIT_USER
		git config user.email $COMMIT_EMAIL
		git config user.signingkey $GPG_KEY_ID
		git config push.default simple

		echogr Git configured.
		cat .git/config

		echogr Commiting changes.
		git add -A
		if [ "$(git log --oneline $TRAVIS_COMMIT_RANGE | wc -l)" == "1" ]; then
			echogr Changes are from a single commit.
			git show -s --format="%B" $TRAVIS_COMMIT > commit-msg.tmp
		else
			echogr Changes are from multiple commits.
			printf "Multiple commits from hosts-source.\n\n" > commit-msg.tmp
			git log --format="%H %s" $TRAVIS_COMMIT_RANGE >> commit-msg.tmp
		fi
		GIT_COMMITTER_DATE=$(git show -s --format="%cD" $TRAVIS_COMMIT) git commit -S -F commit-msg.tmp

		echogr Changes committed, pushing.
		git push
	else
		echogr No changes detected, deployment skipped.
	fi
else
	echogr Running in an untrusted environment, deployment skipped.
fi
