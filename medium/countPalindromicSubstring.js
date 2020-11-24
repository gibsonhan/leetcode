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
let s1 = "racecar";
let s2 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

function bfCountPadSub(str) {
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

bfCountPadSub(s);
bfCountPadSub(s1);
bfCountPadSub(s2);

function bfDynamicCountPadSub(str) {
  let cache = {}
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let s = str[i]
    if (cache[s] === undefined) {
      cache[s] = true
    }
    count += 1

    for (let j = i + 1; j < str.length; j++) {
      s += str[j]

      if (cache[s] === true) {
        count += 1
        continue;
      }
      if (isValidPalidrom(s)) {
        cache[s] = true
        count += 1;
      }
    }
  }
  console.log('what is count', count)
}

bfDynamicCountPadSub(s);
bfDynamicCountPadSub(s1);
bfDynamicCountPadSub(s2);

function countPadSub(str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    count += middleOut(i, i, str)
    count += middleOut(i, i + 1, str)
  }
  console.log('what is count', count)
}

function middleOut(left, right, str) {
  let count = 0
  let l = left;
  let r = right;

  while (l >= 0 && r < str.length && str[l] === str[r]) {
    l--;
    r++;
    count += 1
  }
  return count
}

countPadSub(s)
countPadSub(s1)
countPadSub(s2)
