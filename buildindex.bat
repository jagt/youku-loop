@echo off
pandoc -f markdown -t html -o index.temp main.mkd
replacelink.py index.temp index.html
echo "replaced"
rm index.temp
