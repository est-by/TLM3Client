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
  output.append('\t\r\n\tdrvtlm3.locale.SR = {\r\n\t\tACTIVITY:\'Activity\', NAME:\'Name\', ID:\'Id\', TITLE:\' TLM-302 \', SELECT:\'Select\', KU_KI_Dev:\'Use KI,KU from device\', KI:\'KI\', KU:\'KU\', ADDRESS:\'Device address\', ENBLTIMECORR:\'Time correct\', ENBL3MIN:\'3 Min\', ENBLEVENTS:\'Events\', ENBLIM:\'Instantaneous\', ENBLHR:\'Hours\', ENBLDAY:\'Daily\', ENBLMONTH:\'Monthly\', DATABUS:\'Data bus\', SELECTBUSFOR:\'Select data bus for\'\r\n\t};\r\n\t');
  if (!opt_sb) return output.toString();
};
