#!/bin/bash
set -e

echo Generating hosts files.
mkdir output
node generate.js hosts.yml $(git show -s --format=%cd --date=short) output

if [ "$PUSH_TO_MASTER" == "true" ]; then
	echo Importing SSH key.
	base64 -d <<< $SSH_KEY > ~/.ssh/id_ed25519
	chmod 600 ~/.ssh/id_ed25519

	echo Importing GPG key.
	base64 -d <<< $GPG_KEY | gpg --import

	echo Cloning master branch.
	git clone git@github.com:$TRAVIS_REPO_SLUG master

	cp output/* master/
	cd master
	if [ -n "$(git status --porcelain)" ]; then
		echo Changes detected.

		echo Configuring git.
		git config user.name $(git show -s --format="%aN" $TRAVIS_COMMIT)
		git config user.email $(git show -s --format="%aE" $TRAVIS_COMMIT)
		git config user.signingkey $GPG_KEY_ID
		git config push.default simple

		echo Git configured.
		cat .git/config

		echo Commiting changes.
		git add -A
		if [ "$(git log --oneline $TRAVIS_COMMIT_RANGE | wc -l)" == "1" ]; then
			echo Changes are from a single commit.
			git show -s --format="%B" $TRAVIS_COMMIT > commit-msg.tmp
		else
			echo Changes are from multiple commits.
			printf "Multiple commits from hosts-source.\n\n" > commit-msg.tmp
			git log --format="%H %s" $TRAVIS_COMMIT_RANGE >> commit-msg.tmp
		fi
		GIT_COMMITTER_DATE=$(git show -s --format="%cD" $TRAVIS_COMMIT) git commit -S -F commit-msg.tmp

		echo Changes committed, pushing.
		git push
	else
		echo No changes detected, deployment skipped.
	fi
else
	echo Running in a local environment, deployment skipped.
fi
