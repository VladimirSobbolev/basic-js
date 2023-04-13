const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let res = ''

  if (options) {
    let repeatTimes, separator, addition, additionRepeatTimes, additionSeparator
    repeatTimes = options.repeatTimes || 1;
    separator = options.separator || '+';
    addition = String(options.addition) || '';
    additionRepeatTimes = options.additionRepeatTimes || 1;
    additionSeparator = options.additionSeparator || '|';

    let strExtender = '';
    if (String(options.addition) !== 'undefined' ) {
      const strExtend = addition + additionSeparator;
      strExtender = strExtend.repeat(additionRepeatTimes)
    } else {
     strExtender = ''.repeat(additionRepeatTimes)
    }
    let extenderRepeater = str + strExtender;
    if (String(options.addition) !== 'undefined' ) {

    extenderRepeater = (extenderRepeater).slice(0, extenderRepeater.length - additionSeparator.length);
    }
    res = extenderRepeater;
    for (let i = 1; i < repeatTimes; i++) {
      res = res + separator + extenderRepeater
     }
    return res
  }

}

module.exports = {
  repeater
};
