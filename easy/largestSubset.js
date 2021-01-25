let a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let maxEndingHere = a[0];
let maxSoFar = a[0];

for (let i = 1; i < a.length; i++) {
  maxEndingHere = Math.max(maxEndingHere + a[i], a[i]);
  maxSoFar = Math.max(maxSoFar, maxEndingHere);
}

console.log(maxSoFar);
