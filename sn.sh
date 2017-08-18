#!/bin/bash
read -p "SN Domain: " domain
echo ""
read -p "Service: " service
echo ""
read -p "IP1(aaa.bbb.ccc.): " ip1
echo ""
read -p "IP2(ddd-1): " ip2
echo ""
read -p "Max: " max

for ((num=1;num<=$max;num++))
do
	echo "" "" "" "" "" "" "- ip: $ip1`expr $ip2 + $num`" >> data/hosts.yml
	echo "" "" "" "" "" "" "" "" ""domain: r$num---sn-$domain.$service.com >> data/hosts.yml
done
