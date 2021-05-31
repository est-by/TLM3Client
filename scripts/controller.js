/** Объявление элемента (namespace)*/ 
goog.provide('drvtlm3.controller');
goog.require('drvtlm3.model');

drvtlm3.controller = function () { 
    //base.driver(this, this.toString);
};
goog.addSingletonGetter(drvtlm3.controller);

/**
* Обертка над элементом
*/
drvtlm3.controller.prototype.WrapItem = function (item) {
};


/**
* Подготовка при отправке
*/
drvtlm3.controller.prototype.CleanItem = function (item) {
};
/**
* Вернуть признак On/Off по логике
*/
drvtlm3.controller.prototype.toOnOff = function (value) {
    if (value == true) {
        return "on";
    }
    return "off";
}

/**
* Вернуть строковое представление объекта
* @param item {object} текущий обект для которого нужно описание
*/
drvtlm3.controller.prototype.toString = function () {
    var ctl = drvtlm3.controller.getInstance();
    var str = "" + this.Address;
    if (this.IsAutoconfig != true) {
        //str +=    ", " + ctl.toOnOff(this.EnblTimeCorr)
                //+ ", " + ctl.toOnOff(this.Enbl3min)
                //+ ", " + ctl.toOnOff(this.EnblEvents);
                //+ ", " + ctl.toOnOff(this.EnblIm);    
    }
    return str;

};