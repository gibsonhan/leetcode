/**
 *  Cache all possible combination of string
 *  verify each one?
 *
 * 	 for(let i ..)
 * 		 for ( let j + 1 ...)
 *
 * 		isPalidrome
 *
 * 		space (O(n^2))
 * 		time (O(n))
 */

let s = "aaa";

function countPadSub(str) {
  let cache = [];

  for (let i = 0; i < str.length; i++) {
    let paldStr = str[i];
    cache.push(paldStr);
    for (let j = i + 1; j < str.length; j++) {
      paldStr += str[j];
      cache.push(paldStr);
    }
  }

  let count = 0;
  cache.forEach((str) => {
    if (isValidPalidrom(str)) {
      count++;
    }
  });
  console.log("what is count", count);
}

function isValidPalidrom(str) {
  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}

countPadSub(s);
