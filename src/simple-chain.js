const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
   chain: [],
   string: '',

   getLength() {
      return this.chain.length
   },
   addLink(value) {
      if (value === undefined) value = ''
      if (value === null) value = "null"
      this.chain.push(value)
      return this
   },
   removeLink(position) {
      if (!Number.isInteger(position) || position < 1 || position > this.chain.length) { this.chain = []; throw new Error("You can\'t remove incorrect link!") }
      this.chain.splice(position - 1, 1)
      return this
   },
   reverseChain() {
      this.chain.reverse()
      return this
   },
   finishChain() {
      this.string = '( ' + this.chain.join(' )~~( ') + ' )'
      this.chain = []
      return this.string
   }
};

module.exports = {
   chainMaker
};
