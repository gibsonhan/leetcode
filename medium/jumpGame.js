let input = [2, 3, 1, 1, 4];
let input2 = [3, 2, 1, 0, 4];

function jumpGame(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i > max) return false;
    if (i + arr[i] > arr.length - 1) return true;
    max = Math.max(max, i + arr[i]);
  }
}

let result = jumpGame(input);
let result2 = jumpGame(input2);

console.log(result, result2);
