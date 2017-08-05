#!/bin/bash
set -e

sudo add-apt-repository ppa:git-core/ppa -y
sudo apt-get update -qq
sudo apt-get install git -qq -y

mkdir output
node generate.js hosts.yml $(git show -s --format=%cd --date=short) output
if [ "$PUSH_TO_MASTER" == "true" ]; then
	echo $DEPLOY_KEY | base64 -d > ~/.ssh/id_ed25519
	chmod 600 ~/.ssh/id_ed25519
	git clone git@github.com:$TRAVIS_REPO_SLUG master
	cp output/* master/
	cd master
	if [ -n "$(git status --porcelain)" ]; then
		git add -A
		git config user.name $(git show -s --format="%aN" $TRAVIS_COMMIT)
		git config user.email $(git show -s --format="%aE" $TRAVIS_COMMIT)
		git config push.default simple
		if [ "$(git log --oneline $TRAVIS_COMMIT_RANGE | wc -l)" == "1" ]; then
			git show -s --format="%B" $TRAVIS_COMMIT > commit-msg.tmp
		else
			printf "Multiple commits from hosts-source.\n\n" > commit-msg.tmp
			git log --format="%H %s" $TRAVIS_COMMIT_RANGE >> commit-msg.tmp
		fi
		GIT_COMMITTER_DATE=$(git show -s --format="%cD" $TRAVIS_COMMIT) git commit -F commit-msg.tmp
		git push
	fi
fi
