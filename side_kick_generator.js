
Blockly.Python['move_distance'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var value_distance = Blockly.Python.valueToCode(block, 'distance', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.

    value_distance = value_distance.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
    value_distance = parseInt(value_distance);                // integers only
    value_distance = Math.abs(value_distance);
  var code = 'move_distance(' + '"'+ dropdown_direction + '"' + ',' + value_distance + ')\n';
  return code;
};

Blockly.Python['move_start'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble Python into code variable.
  var code = 'move_start(' + '"' + dropdown_direction + '"' + ')\n';
  return code;
};

Blockly.Python['move_stop'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'move_stop()\n';
  return code;
};

Blockly.Python['move_speed'] = function(block) {
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  value_speed = value_speed.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
  value_speed = parseInt(value_speed);                // integers only
  value_speed = Math.abs(value_speed);
  var code = 'set_move_speed(' + value_speed + ')\n';
  return code;
};


Blockly.Python['move_spin'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var value_degrees = Blockly.Python.valueToCode(block, 'degrees', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  value_degrees = value_degrees.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
  value_degrees = parseInt(value_degrees);
  value_degrees = Math.abs(value_degrees);               // integers only
  var code = 'move_spin(' + '"' + dropdown_direction + '"' + ',' + value_degrees +')\n';
  return code;
};


Blockly.Python['move_pivot'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var value_degrees = Blockly.Python.valueToCode(block, 'degrees', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  value_degrees = value_degrees.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
  value_degrees = parseInt(value_degrees);
  value_degrees = Math.abs(value_degrees);             // integers only
  var code = 'move_pivot(' + '"' + dropdown_direction + '"' + ',' + value_degrees +')\n';
  return code;
};


Blockly.Python['move_steering'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var value_left_speed = Blockly.Python.valueToCode(block, 'left speed', Blockly.Python.ORDER_ATOMIC);
  var value_right_speed = Blockly.Python.valueToCode(block, 'right speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  value_left_speed = value_left_speed.replace(/\(|\)/g, '');      // strips parenthesis out of negative string
  value_right_speed = value_right_speed.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
  value_left_speed = parseInt(value_left_speed);
  value_right_speed = parseInt(value_right_speed);
  value_left_speed = Math.abs(value_left_speed);
  value_right_speed = Math.abs(value_right_speed);               // integers only
  var code = 'move_steering(' + '"' + dropdown_direction + '"' + ',' + value_left_speed + ',' + value_right_speed + ')\n';
  return code;
};


Blockly.Python['move_servo'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var value_position = Blockly.Python.valueToCode(block, 'position', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  value_position = value_position.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
  value_position = parseInt(value_position);
  value_position = Math.abs(value_position);

  value_speed = value_speed.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
  value_speed = parseInt(value_speed);
  value_speed = Math.abs(value_speed);

  var code = 'move_servo(' + '"' + dropdown_motor + '"' + ',' + value_position + ',' + value_speed + ')\n';
  return code;
};

Blockly.Python['event_wait_for_start'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'from SideKick import *\n' + 'wait_for_start()\n';
  return code;
};

Blockly.Python['event_green_button'] = function(block) {
  var dropdown_state = block.getFieldValue('state');
  // TODO: Assemble Python into code variable.
  var code = 'green_button(' + dropdown_state + ')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['event_gray_button'] = function(block) {
  var dropdown_state = block.getFieldValue('state');
  // TODO: Assemble Python into code variable.
  var code = 'black_button(' + dropdown_state + ')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensor_ultrasonic'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'ultrasonic_distance()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensor_line'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'line_finder()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['delay'] = function(block) {
  var number_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep(' + number_name + ')\n';
  return code;
};


Blockly.Python['pixel_color'] = function(block) {
  var dropdown_pixel = block.getFieldValue('pixel');
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var value_brightness = Blockly.Python.valueToCode(block, 'brightness', Blockly.Python.ORDER_ATOMIC);
  value_brightness = value_brightness.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
  value_brightness = parseInt(value_brightness);
  value_brightness = Math.abs(value_brightness);
  var color1 = value_color;
  var re = /[0-9A-Fa-f]{6}/g;
  var inputString = color1;
  if(re.test(inputString)) {  // check to see if it's hex format color
      var code = 'set_pixel(' + '"' + dropdown_pixel + '"' + ','  +  value_color + ',' + value_brightness + ')\n';
  } else {                    // non hex format (random color picker)
      var code = 'set_pixel(' + '"' + dropdown_pixel + '"' + ','  + value_color + ',' + value_brightness + ')\n';
  }
  re.lastIndex = 0; // be sure to reset the index after using .text()
  return code;
};

Blockly.Python['pixels_off'] = function(block) {
  var dropdown_pixel = block.getFieldValue('pixel');
  var value_color = "'#000000'"; // set to off color
  var value_brightness = 0;      // set brighntess to zero
  // TODO: Assemble Python into code variable.
  var code = 'set_pixel(' + '"' + dropdown_pixel + '"' + ','  + value_color + ',' + value_brightness + ')\n';
  return code;
};

Blockly.Python['color_random'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "'#%06x' % random.randint(0, 2**24 - 1)";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['color_picker'] = function(block) {
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble Python into code variable.
  var code = "'" + colour_color + "'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sound_tone'] = function(block) {
  var number_tone = block.getFieldValue('tone');
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var checkbox_checked = block.getFieldValue('checked') === 'TRUE';
  // TODO: Assemble Python into code variable.
  if(checkbox_checked){value_time = 0;} //if checked, play continuosly
  var code = 'play_tone(' + number_tone + ','  +  value_time + ')\n';
  return code;
};

Blockly.Python['sound_stop'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'sound_off()\n';
  return code;
};

Blockly.Python['sound_note'] = function(block) {
  var dropdown_note = block.getFieldValue('note');
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var checkbox_checked = block.getFieldValue('checked') === 'TRUE';
  // TODO: Assemble Python into code variable.
  if(checkbox_checked){value_time = 0;} //if checked, play continuosly
  var code = 'play_note(' + dropdown_note + ','  +  value_time + ')\n';
  return code;
};
