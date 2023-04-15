const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // arr.forEach((el, i) => {
  //   if (el === -1) {
  //
  //   }
  // })
  let res = arr.filter(el => el !== -1)
  res.sort((a, b) => {
    // if (a == -1 || b == -1) {
    //  return  0
    // } else {
      return  a  - b
    // }
  })
  arr.forEach((el, i) => {
    if (el === -1) {
      res.splice(i, 0, el)
    }
  })
  return res
}

module.exports = {
  sortByHeight
};
