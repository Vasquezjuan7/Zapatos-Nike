@echo off
echo ===================================================
echo Subiendo proyecto a GitHub (Vasquezjuan7/Zapatos-Nike)
echo ===================================================

git init
git remote remove origin 2>nul
git remote add origin https://github.com/Vasquezjuan7/Zapatos-Nike.git
git add .
git commit -m "Nike Airforce 1 Premium single card showcase replica"
git branch -M main
git push -u origin main

echo.
echo ¡Proceso finalizado!
pause
