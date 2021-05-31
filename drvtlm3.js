/** Объявление элемента (namespace)*/ 
goog.provide("drvtlm3.Plugin");
/** Объявление необходимости элемента*/
goog.require('drvtlm3.view');

drvtlm3.Plugin = function () { };
goog.addSingletonGetter(drvtlm3.Plugin);

drvtlm3.Plugin.prototype.Info = {
    // файл стилей
    css: "css/app.css",
    // файл языков
    locale: "drvtlm3.locale",
    // перечень обслуживаемых типов
    guid: ["est.by:Bus.TLM3DrvClientImpl"],
    // имя дллки
    dll: "TLM3Drv",
    // имя типа Общих настроек
    sstype: "Sys.Services.Drv.TLM3SharedSetting",
    // иконка для списка (активен)
    image: 'images/tlm3.png',
    // иконка для списка (не активен)
    imagedisable: 'images/tlm3disable.png',
    // заголовок плагина
    title: function () { return drvtlm3.locale.SR.TITLE; },
    // формы для редактирования
    forms: function (selectService) {
        var inst = drvtlm3.view.getInstance();
        return inst.getForms(selectService);
    },
    // иконка выбора типа
    typeIcon: function () {
        return 'tlm3Type';
    },
    // модель
    model: function () {
        return drvtlm3.model.getInstance();
    },
    // заглушка
    fixture: function () {
        return drvtlm3.fixture.getInstance();
    },
    // логика
    controller: function () {
        return drvtlm3.controller.getInstance();
    },
    // формы для автоконфигурирования
    autoconfigForms: function (selectService) {
        return selectService.getSearchTemplate(selectService);
    },
    sharedSettings: function(selectService){
        var inst = drvtlm3.view.getInstance();
        return inst.getSharedSettingsForms(selectService);
    },
	bus: "client"
 };



