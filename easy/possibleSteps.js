let n = 2;

var cache = {};
function possibleSteps(input) {
  if (input in cache) return cache[input];

  if (input === 0) {
    return 1;
  }
  if (input < 0) {
    return 0;
  }

  /**  Post order traversal
   *
  let left = possibleSteps(input - 1);
  let right = possibleSteps(input - 2);

  let totalSteps = left + right;
  **/

  //Looks exactly like a fib sequence. Fib -> is an postorder traverasl. Look ablve
  let totalSteps = possibleSteps(input - 1) + possibleSteps(input - 2);

  cache[input] = totalSteps;
  return totalSteps;
}

//Space -> O(n)
//Time -> O(n log n)

console.log(possibleSteps(100));
console.log(cache);
