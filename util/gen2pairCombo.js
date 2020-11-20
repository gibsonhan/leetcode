let arr = [1, 2, 3, 4, 5];

let cache = {};

function gen2pairCombo(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      cache[JSON.stringify([arr[i], arr[j]])] = true;
    }
  }
}

console.log(cache);
