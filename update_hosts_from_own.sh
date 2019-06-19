#!/bin/bash
# Merge your own host and newly released host

source_file=/etc/hosts
other_file=./hosts-files/hosts
target_file=/etc/hosts
line=20
head -$line $source_file > tmp
cat tmp
sudo cat tmp  > $target_file
sudo cat $other_file >> $target_file
#cat $target_file
rm -f tmp
