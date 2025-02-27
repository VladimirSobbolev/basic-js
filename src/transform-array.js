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
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  try {
    // getRectArea(3, 'A');
  } catch (e) {
    return e
  }

  const result = [];

    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]){
        case '--double-next' :
          if(i !== arr.length - 1)
            result.push(arr[i + 1]);
          break;

        case '--discard-next' :
          if(i !== arr.length - 1)
            i++;
          break;

        case '--double-prev' :
          if(i !== 0 && arr[i - 2] !== '--discard-next')
            result.push( result[i-1]);
          break;

        case '--discard-prev' :
          if(i !== 0 && arr[i - 2] !== '--discard-next')
            result.pop();
          break;

        default :
          result.push(arr[i]);
          break;

      }
  }

  return result
}

module.exports = {
  transform
};
