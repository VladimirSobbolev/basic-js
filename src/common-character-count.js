const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const arr1 = s1.split('');
    const arr2 =s2.split('');
    // const repeatedLetters = [];
    let counter = 0;
    arr1.forEach(el => {
        if (arr2.indexOf(el) !== -1) {
            counter +=1;
            delete arr2[arr2.indexOf(el)]
        }
    })
    return counter
}

module.exports = {
    getCommonCharacterCount
};
