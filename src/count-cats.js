const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(backyard) {
   // throw new NotImplementedError('Not implemented');
   let sum = 0
   for (let elem in backyard) {
      backyard[elem].forEach(element => {
         element == "^^" ? sum++ : sum += 0
      });
   }
   return sum
}

module.exports = {
   countCats
};
