#!/bin/sh

GENTIME=$(date "+%Y-%m-%d %H:%M:%S")
FILE='../shadowrocket.conf'
HEADER="[General]\nbypass-system = true\nskip-proxy = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, localhost, *.local, e.crashlytics.com, captive.apple.com\nbypass-tun = 10.0.0.0/8,100.64.0.0/10,127.0.0.0/8,169.254.0.0/16,172.16.0.0/12,192.0.0.0/24,192.0.2.0/24,192.88.99.0/24,192.168.0.0/16,198.18.0.0/15,198.51.100.0/24,203.0.113.0/24,224.0.0.0/4,255.255.255.255/32\ndns-server = \n\n[Rule]\nFINAL,DIRECT\n\n[URL Rewrite]\n^http://(www.)?g.cn https://www.google.com header\n^http://(www.)?google.cn https://www.google.com header\n^http://reject.example.com reject\n\n[HOST]"

echo '# Generate Time: ${GENTIME}' > ${FILE}
echo ${HEADER} >> ${FILE}
IFS="
"
for line in `cat '../hosts'`; do
	if [[ ${line:0:1} = '#' ]]; then
		echo ${line} >> ${FILE}
	else
		echo ${line} | awk '{printf("%s = %s\n", $2, $1)}' >> ${FILE}
	fi
done