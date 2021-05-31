// This file was automatically generated from drvtlm3.tpl.soy.
// Please don't edit this file by hand.

goog.provide('drvtlm3.locale');

goog.require('soy');
goog.require('soy.StringBuilder');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string|undefined}
 * @notypecheck
 */
drvtlm3.locale.loadLocale = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t\r\n\tdrvtlm3.locale.SR = {\r\n\t\tACTIVITY:\'Активность\', NAME:\'Имя\', ID:\'Id\', TITLE:\'TLM-302\', SELECT:\'Выбрать\', KU_KI_Dev:\'Use KI,KU from device\', KI:\'KI\', KU:\'KU\', ADDRESS:\'Адрес устройства\', ENBLTIMECORR:\'Коррекция времени\', ENBL3MIN:\'3 Min\', ENBLEVENTS:\'События\', ENBLIM:\'Мгновенные\', ENBLHR:\'Часовые\', ENBLDAY:\'Суточные\', ENBLMONTH:\'Месячные\', DATABUS:\'Шина данных\', SELECTBUSFOR:\'Выберите шину для устройства\'\r\n\t};\r\n\t');
  if (!opt_sb) return output.toString();
};
