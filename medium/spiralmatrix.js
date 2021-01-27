let input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

let input2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function traverseSpiral(matrix) {
  let numElement = matrix.length * matrix[0].length;
  let outputArr = [];

  //default max Moves
  let rightMax = matrix[0].length;
  let downMax = matrix.length;
  let leftMax = 0;
  let upMax = 0;

  //start col
  let row = 0;
  let col = 0;
  let cycle = 0;
  while (outputArr.length < numElement) {
    console.log("what is my cycle", cycle);
    console.log("row and col", row, col);

    //move rigth
    console.log("move right");
    while (col < rightMax - cycle && outputArr.length < numElement) {
      console.log(matrix[row][col]);
      outputArr.push(matrix[row][col]);
      col++;
    }
    col--; //decrement col, so it's inbound for next move
    row++; //increment row, so we dont have duplicate

    //move down
    console.log("move down");
    while (
      row < downMax - cycle &&
      outputArr &&
      outputArr.length < numElement
    ) {
      console.log(matrix[row][col]);
      outputArr.push(matrix[row][col]);
      row++;
    }
    row--; //decrement row, so it's inbound for next move
    col--; //decrement col, so we dont have duplicate

    //move left
    console.log("move left");
    while (col >= leftMax + cycle && outputArr.length < numElement) {
      console.log(matrix[row][col]);
      outputArr.push(matrix[row][col]);
      col--;
    }
    col++; //increment the col +1, so it's inboudn for next move
    row--; //decrement row so we dont have duplicate

    //move up
    console.log("move up");
    while (row > upMax + cycle && outputArr.length < numElement) {
      console.log(matrix[row][col]);
      outputArr.push(matrix[row][col]);
      row--;
    }
    row++; //increment row so it is in bound
    col++; //increment row so we dont have decrement

    cycle++; //keep track of cycle, cycle tighten the bound of max moves
    console.log("ending row, and col", row, col);
  }

  return outputArr;
}

let spiralArr = traverseSpiral(input2);
console.log(spiralArr);
