Blockly.Blocks['move_distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["forward","forward"], ["reverse","reverse"]]), "direction");
    this.appendDummyInput()
        .appendField("for");
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "distance");
    this.appendDummyInput()
        .appendField("cm");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("Move robot a set distance and stop. Continue to next block once robot reaches it's target.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("start moving");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["forward","forward"], ["reverse","reverse"], ["spin right","spin_right"], ["spin left","spin_left"], ["pivot right","pivot_right"], ["pivot left","pivot left"]]), "direction");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("Start robot moving while continuing to next block.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set move speed to");
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, 0, 100), "speed");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("Sets the speed of the robot. The speed range is 0 - 100%.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move_spin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("spin turn");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["clockwise","clockwise"], ["counterclockwise","counterclockwise"]]), "direction");
    this.appendDummyInput()
        .appendField(new Blockly.FieldAngle(90), "degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("Turn the robot for number of degrees in a spinning motion about it's center.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move_pivot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pivot turn");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"]]), "direction");
    this.appendDummyInput()
        .appendField(new Blockly.FieldAngle(90), "degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("Turn the robot left or right for number of degrees by pivoting on one wheel.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move_steering'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("start moving with steering  ");
    this.appendDummyInput()
        .appendField("left speed")
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 100), "left speed");
    this.appendDummyInput()
        .appendField("%");
    this.appendDummyInput()
        .appendField("right speed")
        .appendField(new Blockly.FieldNumber(0), "right speed");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("Start moving forward with a steering ratio. The robot will drive forward in an arc by setting a speed ratio for the left and right motors. The arc will be sharper with larger ratios. Speed range for each motor is 0 - 100.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['event_wait_for_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Program Start");
    this.setNextStatement(true, null);
    this.setColour("#eea011");
 this.setTooltip("Wait here until robot's start button is pressed.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['event_green_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("green button is")
        .appendField(new Blockly.FieldDropdown([["pressed","pressed"], ["not pressed","released"]]), "state");
    this.setOutput(true, "Boolean");
    this.setColour("#ec5b13");
 this.setTooltip("Read the state of the green button. True is pressed, False is not pressed.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['event_gray_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("black button is")
        .appendField(new Blockly.FieldDropdown([["pressed","pressed"], ["not pressed","released"]]), "state");
    this.setOutput(true, "Boolean");
    this.setColour("#ec5b13");
 this.setTooltip("Read the state of the black button. True is pressed, False is not pressed.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_ultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ultrasonic sensor ");
    this.setOutput(true, "Number");
    this.setColour("#ec5b13");
 this.setTooltip("Read the distance to an object in centimeters returned by the ultrasonic sensor.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("line finder sensor");
    this.setOutput(true, "Boolean");
    this.setColour("#ec5b13");
 this.setTooltip("Read the value returned by the line finder sensor. ");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['delay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pause for");
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.01), "NAME");
    this.appendDummyInput()
        .appendField("seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#eea011");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
