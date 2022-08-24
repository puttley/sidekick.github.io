Blockly.Blocks['move_distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["forward","forward"], ["reverse","reverse"]]), "direction");
    this.appendDummyInput()
        .appendField("for");
    this.appendValueInput("distance")
        .setCheck("Number");
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

Blockly.Blocks['move_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stop moving");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("Stop robot movement.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set move speed to");
    this.appendValueInput("speed")
        .setCheck("Number");
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
        .appendField("spin");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["clockwise","clockwise"], ["counter clockwise","counterclockwise"]]), "direction");
    this.appendValueInput("degrees")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("degrees");
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
        .appendField("pivot");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"]]), "direction");
    this.appendValueInput("degrees")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("degrees");
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
        .appendField("start moving")
        .appendField(new Blockly.FieldDropdown([["forward","forward"], ["reverse","reverse"]]), "direction");
    this.appendValueInput("left speed")
        .setCheck("Number")
        .appendField("left speed");
    this.appendDummyInput()
        .appendField("%");
    this.appendValueInput("right speed")
        .setCheck("Number")
        .appendField("right speed");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("Start moving forward with a steering ratio. The robot will drive in an arc by setting a speed ratio for the left and right motors. The arc will be sharper with larger ratios. Speed range for each motor is 0 - 100.");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['move_servo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["servo 1","servo_1"], ["servo 2","servo_2"], ["both servos","servo_1_2"]]), "motor");
    this.appendValueInput("position")
        .setCheck("Number")
        .appendField("to");
    this.appendDummyInput()
        .appendField("degrees at");
    this.appendValueInput("speed")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("% speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#db2457");
 this.setTooltip("Move servo motors to a position at a speed. Position is 0-180, speed is 0 - 100%.");
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
        .appendField(new Blockly.FieldDropdown([["pressed","pressed"], ["not pressed","not_pressed"]]), "state");
    this.setOutput(true, "Boolean");
    this.setColour("#eea011");
 this.setTooltip("Read the state of the green button. Returns true if condition is met.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['event_gray_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("black button is")
        .appendField(new Blockly.FieldDropdown([["pressed","pressed"], ["not pressed","not_pressed"]]), "state");
    this.setOutput(true, "Boolean");
    this.setColour("#eea011");
 this.setTooltip("Read the state of the black button. Returns true if condition is met.");
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
        .appendField("wait for");
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

Blockly.Blocks['pixel_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set")
        .appendField(new Blockly.FieldDropdown([["pixel 1","pixel_1"], ["pixel 2","pixel_2"], ["pixel 3","pixel_3"], ["pixel 4","pixel_4"], ["all pixels","pixel_all"]]), "pixel")
        .appendField("to");
    this.appendValueInput("color")
        .setCheck("Colour");
    this.appendDummyInput()
        .appendField("color at");
    this.appendValueInput("brightness")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("% brightness");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Set the pixel to a color and set the brightness.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pixels_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["pixel 1","pixel_1"], ["pixel 2","pixel_2"], ["pixel 3","pixel_3"], ["pixel 4","pixel_4"], ["all pixels","pixel_all"]]), "pixel")
        .appendField("off");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Turn off selected pixel(s).");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['color_random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("random color");
    this.setOutput(true, "Colour");
    this.setColour("#891813");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['color_picker'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setOutput(true, "Colour");
    this.setColour("#891813");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['sound_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stop all sounds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1b84e4");
 this.setTooltip("Turn off sounds.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_note'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play musical note")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["E","E"], ["F","F"], ["G","G"]]), "note");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1b84e4");
 this.setTooltip("Play a musical note.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_tone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play tone at")
        .appendField(new Blockly.FieldNumber(0, 0, 5000), "tone")
        .appendField("Hz");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1b84e4");
 this.setTooltip("Play a tone at a frequency in Hz.");
 this.setHelpUrl("");
  }
};
