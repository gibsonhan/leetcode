let nums = [-1, 0, 1, 2, -1, -4];

/**
 *  1. iterate through each index
 *  2. find all possible combination
 * 	3. find all possible 3 combination
 */

function threeSum(arr) {
  if (arr.length < 2) return [];
  let cache = {};
  let zero = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = i + 1; k < arr.length; k++) {
        const sum = arr[i] + arr[j] + arr[k];

        if (sum === 0) {
          let zeroSum = [arr[i], arr[j], arr[k]];

          //sort combo of index, to compare for duplicates
          zeroSum.sort();

          //convert to json to store in cache
          let jsonSum = JSON.stringify(zeroSum);
          if (!cache[jsonSum]) {
            cache[jsonSum] = true;
            zero.push(zeroSum);
          }
        }
      }
    }
  }
  console.log(zero);
}

threeSum(nums);
