let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let combination = [];
let max = Number.NEGATIVE_INFINITY;
let num = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; i < arr.length; j++) {
    let lastIndex = combination.length - 1;
    prev = combination[lastIndex];

    combination.push(prev + arr[j]);
    maxSubset = Math.max(arr[i], maxSubset);
  }
}

console.log(combination);
