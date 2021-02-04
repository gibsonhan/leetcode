let matrix1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
let matrix2 = [
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 0],
];

function setMatrixZero(matrix = [[]]) {
  const zeroPosition = findZeros(matrix);
  const test = setZero(zeroPosition, matrix);
  return test;

  function findZeros(matrix = [[]]) {
    let m = matrix;

    if (m.length === 0 && m[0].length === 0) return [];
    let rowBound = m.length;
    let colBound = m[0].length;
    let arr = [];

    for (let row = 0; row < rowBound; row++) {
      for (let col = 0; col < colBound; col++) {
        let value = m[row][col];
        if (value === 0) arr = [...arr, [row, col]];
      }
    }
    return arr;
  }

  //Important thing to thinkabout is about the memory reference to array in javascript
  function setZero(a = [], matrix = [[]]) {
    let m = matrix; //in C++ this would have created a new memory assignment
    while (a.length > 0) {
      let pos = a.pop();
      let [rowPos, colPos] = pos;
      //covert col to zero
      for (let col = 0; col < m[0].length; col++) {
        m[rowPos][col] = 0;
      }

      //covert row to zero
      for (let row = 0; row < m.length; row++) {
        m[row][colPos] = 0;
      }
    }
    return m;
  }
}

console.log(setMatrixZero(matrix1));
console.log(setMatrixZero(matrix2));
