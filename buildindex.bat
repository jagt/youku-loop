@echo off
python C:\Python26\Scripts\markdown main.mkd -f index.temp
replacelink.py index.temp index.html
echo "replaced"
rm index.temp
