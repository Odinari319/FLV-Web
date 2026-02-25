@echo off
cd /d %~dp0
set /p COMMENT=Entrez le commentaire du commit : 

git add .
git commit -m "%COMMENT%"
git push

npx firebase deploy

pause