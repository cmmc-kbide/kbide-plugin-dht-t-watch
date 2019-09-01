Blockly.Blocks['dhtesp_setup'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("DHT12 setup pin")
            .appendField(new Blockly.FieldNumber(21), "PIN");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(165);
        this.setTooltip("setup sensor DHT ");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['dhtesp_read_temp'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("read temperature °C");
        this.setInputsInline(true);
        this.setOutput(true, ["float", "Number"]);
        this.setColour(165);
        this.setTooltip("read temperature in Celsius");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['dhtesp_read_humid'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("read humidity %");
        this.setInputsInline(true);
        this.setOutput(true, ["float", "Number"]);
        this.setColour(165);
        this.setTooltip("read humidity in percentage");
        this.setHelpUrl("");
    }
};