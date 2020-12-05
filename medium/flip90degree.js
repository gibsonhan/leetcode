//Flip

function tranposeAndFlip(matrix) {
  if (matrix.length !== matrix[0].length || !matrix) console.log("error");
  let m = matrix;
  console.log("inital matrix", m);
  for (let i = 0; i < m.length; i++) {
    for (let j = i; j < m[0].length; j++) {
      if (i === j) continue;
      temp = m[i][j];
      m[i][j] = m[j][i];
      m[j][i] = temp;
    }
  }
  console.log("what is tranpose m", m);

  //flip matrix
  let left = 0;
  let right = m[0].length - 1;
  while (left < right) {
    for (let i = 0; i < matrix.length; i++) {
      let temp = m[i][left];
      m[i][left] = m[i][right];
      m[i][right] = temp;
    }
    left++;
    right--;
  }
  console.log("final form", m);
}

let m = [
  ["a", "b"],
  ["c", "d"],
];

let m1 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

tranposeAndFlip(m);
tranposeAndFlip(m1);
