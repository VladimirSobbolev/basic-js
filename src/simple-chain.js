const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
    // массив легче обработать чем строку

  getLength() {
    return this.chain.length
    // длина массива - длина цепи
  },

  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this
    // добавляем значение в массив

  },
  removeLink(position) {
    if (!this.chain[position - 1]  || typeof position !== 'number') {
      //( проверяю что такой эл. есть в массиве || проверяю что это число, а не строка или типо того)
      this.chain = [];
      throw new Error("You can't remove incorrect link!")
    } else {
      // подставляю куда надо
      this.chain.splice(position - 1, 1);
      return this
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    //получаю строку
    let chainResult = this.chain.join('~~');
    //обнавляю цепь
    this.chain = [];
    return chainResult;
  }
};

module.exports = {
  chainMaker
};
