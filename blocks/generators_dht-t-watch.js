Blockly.JavaScript['dhtesp_setup'] = function(block) {
  var number_pin = block.getFieldValue('PIN');
  var code = `
#EXTINC#include "DHTesp.h"#END
#VARIABLE DHTesp dhtSensor1;#END
dhtSensor1.setup(${number_pin},DHTesp::DHT11);
`;
  return code;
};

Blockly.JavaScript['dhtesp_read_temp'] = function(block) {
  var code = `dhtSensor1.getTemperature()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['dhtesp_read_humid'] = function(block) {
  var code = `dhtSensor1.getHumidity()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};