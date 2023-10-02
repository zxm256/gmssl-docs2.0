wget -O docs/multilanguage/java.md https://raw.githubusercontent.com/GmSSL/GmSSL-Java/main/README.md
wget -O docs/multilanguage/php.md https://raw.githubusercontent.com/GmSSL/GmSSL-PHP/main/README.md
wget -O docs/multilanguage/python.md https://raw.githubusercontent.com/GmSSL/GmSSL-Python/main/README.md
wget -O docs/multilanguage/go.md https://raw.githubusercontent.com/GmSSL/GmSSL-Go/main/README.md

time="同步时间: $(date "+%Y-%m-%d %H:%M:%S")"
echo $time >> docs/multilanguage/java.md
echo $time >> docs/multilanguage/php.md
echo $time >> docs/multilanguage/python.md
echo $time >> docs/multilanguage/go.md
