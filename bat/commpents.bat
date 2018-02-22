
@echo off
:qwe
echo Input components name  ......
set /p componentsName=
echo Your Components Name is %componentsName%.
echo A| xcopy /E C:\git\zkui\src\components\%componentsName%\*.*  C:\git\zkcloud_app\node_modules\zkui\src\components\%componentsName%
goto qwe
pause

