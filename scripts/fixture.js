/** Объявление элемента (namespace)*/ 
goog.provide('drvtlm3.fixture');
goog.require('goog.array');
/** ожидаемые данные по пользователям*/
drvtlm3.fixture = function () {
    
};
goog.addSingletonGetter(drvtlm3.fixture);

/**
* Болванка на создание нового объекта для автоконфига, 
* обязательно заполнить все возможные поля
* @param mode {bool} true= просто взять объект для создания, false= для построения mapping
*/
drvtlm3.fixture.prototype.autoconfigInit = function (mode) {
    var obj = {
        Address: "1-255"
    }
    return obj;
};

drvtlm3.fixture.prototype.getShared = function () {
    drvtlm3.fixture.initEnums();
    return goog.json.serialize({
        "EnblTimeCorr": true,        
        "EnblEvents": false,
        "EnblIm": false,        
        "EnblHr": false,        
        "EnblDay": false,        
        "EnblMonth": false,        
        "Arch": 0,
        "Im": 0
    });
};
drvtlm3.fixture.prototype.initShared = function (mode) {
    var obj = {
        Id: 0,
        Name: "Setting TLM3",
        SettingShared: {
            Body: this.getShared()
        },
        TypeGuid: drvtlm3.Plugin.getInstance().Info.guid[0]
    };
    return obj;
};

/**
* Болванка на создание нового объекта, обязательно заполнить все
* возможные поля
* @param mode {bool} true= просто взять объект для создания, false= для построения mapping
*/
drvtlm3.fixture.prototype.init = function (mode) 
{
    drvtlm3.fixture.initEnums();
    var obj = {
        Id:{ IdInt: 100100 },
        Active: true,                             
        DisplayName: "TLM3",        
        SettingContent: {
            Body: "{\"Address\":1}"
        },
        SettingShared: {
            Body: this.getShared()
        },
        TypeGuid: drvtlm3.Plugin.getInstance().Info.guid[0]
    };
	return obj;
};


/**
* Зарегистрировать Enum c локализованными полями.
* Регистрация должна проходить через функцию, т.к. в чистом fixture
* ничего не известно про локаль.
* Регистрация проходит только если енума нет в объекте
*/
drvtlm3.fixture.initEnums = function () {
 
}


    