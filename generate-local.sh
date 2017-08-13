#!/bin/bash
set -e

if [ -e output ]; then
	rm -rf output
fi
mkdir output
node src/generate.js "$PWD/data" $(git show -s --format=%cd --date=short) "$PWD/output"
