let input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

let numElement = input.length * input[0].length;
let outputArr = [];

let rightMoves = input[0].length;
let downMoves = input.length;
let leftMoves = 0;
let upMoves = 0;

let row = 0;
let col = 0;

while (outputArr.length < numElement) {
  while (col < rightMoves) {
    outputArr.push(input[row][col]);
    col++;
  }
  col--; //at the end of column reset position to last valid point
  row++; //increment row + 1

  while (row < downMoves) {
    outputArr.push(input[row][col]);
    row++;
  }
  row--; //at the end of down move, reset position to last valid point
  col--;

  while (col >= leftMoves) {
    outputArr.push(input[row][col]);
    col--;
  }
  col++; //at the end of left moves, reset position to last valid point
  row--;

  while (row > upMoves) {
    outputArr.push(input[row][col]);
    row--;
  }

  rightMoves--;
  downMoves--;
  leftMoves++;
  upMoves++;
  row++;
  col++;
}

console.log(outputArr);
