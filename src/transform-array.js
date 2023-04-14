const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
   // throw new NotImplementedError('Not implemented');
   if (!Array.isArray(arr)) { throw new Error("'arr' parameter must be an instance of the Array!") }
   if (arr.every(el => Array.isArray(el))) {
      arr.forEach(el => transform(el));
   }

   let newArr = arr.slice()
   let res = []
   for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] == '--discard-next') { delete newArr[i]; delete newArr[i + 1]; }
      if (newArr[i] == '--discard-prev') {
         // newArr.splice(i - 1, 2)
         delete newArr[i]; delete newArr[i - 1];
      }
      if (newArr[i] == '--double-next') {
         newArr.splice(i + 1, 0, newArr[i + 1]);
         delete newArr[i];
         // console.log(newArr);
      }
      if (newArr[i] == '--double-prev') {
         newArr.splice(i, 0, newArr[i - 1]);
         // console.log(newArr);
         delete newArr[i + 1];
         // console.log(newArr);
      }
   }
   return res = newArr.filter(el => { if (typeof el == 'number') { return el } })

}

module.exports = {
   transform
};
