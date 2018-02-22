@echo off
:qwe
echo Input components name  ......
set /p componentsName=
echo A| xcopy /E C:\git\zkui\src\styles\*.*  C:\git\zkcloudv11\src\web\ZKCloud.Web.App\node_modules\zkui\src\styles
echo A| xcopy /E C:\git\zkui\src\styles\variable.less  C:\git\zkcloudv11\src\web\ZKCloud.Web.App\src\assets\css\zkui\theme.less
goto qwe
pause
