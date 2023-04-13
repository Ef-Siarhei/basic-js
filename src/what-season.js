const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
   // throw new NotImplementedError('Not implemented');

   if (!(date instanceof Date)) { throw new Error('Invalid date!') }
   if (isNaN(date)) { return 'Unable to determine the time of year!' }
   // else {
   // if (Object.prototype.toString.call(date) !== "[object Date]" && !isNaN(date)) { return 'Invalid date!' }

   // if (!(date instanceof Date)) { return 'Invalid date!' }
   // else {
   // try {

   let month = date.getMonth()
   if (month == 11 || month <= 1) return "winter"
   if (month <= 4) return "spring"
   if (month <= 7) return "summer"
   if (month <= 10) return "autumn"

   // }
   // catch (error) {
   //    console.log("Invalid date!")
   // }

   // }
}


module.exports = {
   getSeason
};
