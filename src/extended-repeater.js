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
   //   throw new NotImplementedError('Not implemented');

   let string = String(str)

   let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
   let separator = options.separator ? options.separator : '+'
   let addition = options.addition ? options.addition : '';
   if (typeof options.addition == 'boolean') addition = String(options.addition)
   if (options.addition === null) addition = 'null'
   let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
   let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

   let addRep = []
   for (let i = 0; i < additionRepeatTimes; i++)  addRep.push(addition)

   let addRepSep = addRep.join(additionSeparator)

   let result = []
   for (let i = 0; i < repeatTimes; i++) result.push(string + addRepSep)

   return result.join(separator)

}

module.exports = {
   repeater
};
