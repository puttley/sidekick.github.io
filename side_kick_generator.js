Blockly.Python['move_distance'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var number_distance = block.getFieldValue('distance');
  // TODO: Assemble Python into code variable.
  var code = 'move_distance(' + dropdown_direction + ',' + number_distance + ')\n';
  return code;
};

Blockly.Python['move_start'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble Python into code variable.
  var code = 'move_start(' + dropdown_direction + ')\n';
  return code;
};

Blockly.Python['move_stop'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'move_stop()\n';
  return code;
};

Blockly.Python['move_speed'] = function(block) {
  var number_speed = block.getFieldValue('speed');
  // TODO: Assemble Python into code variable.
  var code = 'set_move_speed(' + number_speed + ')\n';
  return code;
};

Blockly.Python['move_spin'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var angle_degrees = block.getFieldValue('degrees');
  // TODO: Assemble Python into code variable.
  var code = 'move_spin(' + dropdown_direction + ',' + angle_degrees +')\n';
  return code;
};

Blockly.Python['move_pivot'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var angle_degrees = block.getFieldValue('degrees');
  // TODO: Assemble Python into code variable.
  var code = 'move_pivot(' + dropdown_direction + ',' + angle_degrees +')\n';
  return code;
};

Blockly.Python['move_steering'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var number_left_speed = block.getFieldValue('left speed');
  var number_right_speed = block.getFieldValue('right speed');
  // TODO: Assemble Python into code variable.
  var code = 'move_steering(' + dropdown_direction + ',' + number_left_speed + ',' + number_right_speed + ')\n';
  return code;
};

Blockly.Python['move_servo'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var number_position = block.getFieldValue('position');
  var number_speed = block.getFieldValue('speed');
  // TODO: Assemble Python into code variable.
  var code = 'move_servo(' + dropdown_motor + ',' + number_position + ',' + number_speed + ')\n';
  return code;
};

Blockly.Python['event_wait_for_start'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'wait_start_button()\n';
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
  var code = 'ultrasonic_distance()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensor_line'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'line_finder()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['delay'] = function(block) {
  var number_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.JavaScript['pixel_color'] = function(block) {
  var dropdown_pixel = block.getFieldValue('pixel');
  var colour_color = block.getFieldValue('color');
  var number_brightness = block.getFieldValue('brightness');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['pixels_off'] = function(block) {
  var dropdown_pixel = block.getFieldValue('pixel');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sound_tone'] = function(block) {
  var number_tone = block.getFieldValue('tone');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sound_stop'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sound_note'] = function(block) {
  var dropdown_note = block.getFieldValue('note');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
