const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  const firstLetters = [];
  members.forEach(el => {
    if (typeof el === 'string') {
      firstLetters.push(el.trim()[0].toUpperCase())
    }
  })
  const firstLettersSorted = firstLetters.sort((a, b) => a.localeCompare(b));
  const dreamTeam = firstLettersSorted.join('');
  return dreamTeam
}

module.exports = {
  createDreamTeam
};
