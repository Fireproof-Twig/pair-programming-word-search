const transpose = function (matrix) {
  let newArr = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let row = [];

    for (let j = 0; j < matrix.length; j++) {

      row.push(matrix[j][i]);
    }
    newArr.push(row);
  }
  return newArr;
};

const wordSearch = (letters, word) => { 
  if (letters.length === 0) {
    return false;
  }
  let lettersCopy = letters;
  const horizontalJoin = letters.map(ls => ls.join(''))
  let verticalJoin = transpose(lettersCopy);
  verticalJoin = verticalJoin.map(ls => ls.join(''));
  for (sequence of verticalJoin) {
    if (sequence.search(word) !== -1) {
      return true;
    }
  }
  for (sequence of horizontalJoin) {
    if (sequence.search(word) !== -1) {
      return true;
    }
  }
  return false;


    
}

module.exports = wordSearch