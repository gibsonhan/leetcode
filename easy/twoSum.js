//Brute force
const twoSum = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {}
    if (arr[i] + arr[j] === target) return [i, j];
  }
};

/*Optimized solution
	- 1 pass, using hastable [remaining difference] : [index]
	- at each new iteration, use the new new difference to check if hash[key] exist
	- return [index, cache[currDiff]] if value is found
*/
const cache = {};
const twoSum = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let currDiff = target - arr[i];

    if (cache[currDiff] !== undefined && cache[currDiff] !== i) {
      return [i, cache[currDiff]];
    }
    cache[currDiff] = i;
  }
  return null;
};
