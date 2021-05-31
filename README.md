# drvemera
Клиентский драйвер для TLC3  (project\src\client\js\app\project\plugins\drivers)

1. 
Для подключения в приложение, добавить в файл:

..\project\src\client\js\app\project\plugins\drivers

Загрузку:

drivers.prototype.list =
[
	{
		lic: EnergyType.Electro,
		canCreate: true,
	        dir: "drvtlc3"
	},	

2. Удалить папку ..\project\bin\data\websrvstore
Или запустить в режиме отладки.


