@echo off
:qwe
echo Input components name  ......
set /p componentsName=
echo A| xcopy /E C:\git\zkui\src\styles\*.*  C:\git\zkcloud_app\node_modules\zkui\src\styles
echo A| xcopy /E C:\git\zkui\src\styles\variable.less  C:\git\zkcloud_app\src\assets\css\zkui\theme.less
goto qwe
pause
