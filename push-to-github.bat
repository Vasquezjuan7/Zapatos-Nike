@echo off
echo ===================================================
echo Subiendo proyecto a GitHub (Vasquezjuan7/Zapatos-Nike)
echo ===================================================

set "GIT_EXE=C:\Users\juanv\AppData\Local\GitHubDesktop\app-3.6.4\resources\app\git\cmd\git.exe"

"%GIT_EXE%" init
"%GIT_EXE%" remote remove origin 2>nul
"%GIT_EXE%" remote add origin https://github.com/Vasquezjuan7/Zapatos-Nike.git
"%GIT_EXE%" add .
"%GIT_EXE%" commit -m "Nike Airforce 1 Premium single card showcase replica"
"%GIT_EXE%" branch -M main
"%GIT_EXE%" push -u origin main

echo.
echo ¡Proceso finalizado!
pause
