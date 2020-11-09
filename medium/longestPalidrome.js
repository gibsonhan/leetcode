/**
 *  Start from the middle
 *      2 cases to consider
 *          aa - evenFind
 *          bab - oddFind
 *
 * let string = "babad"
 *
 *      b
 *      ba
 *      bab
 *      baba
 *      babad
 *
 *      a
 *      ab
 *      aba
 *      abad
 *
 *      b
 *      ba
 *      bad
 *
 *      a
 *      ad
 *
 *      d
 */

let string = "babad";
let string1 = "racecar";
let string2 = "qwebccbjfeifj";

function bfLongestPalidrome(str) {
  let longestPad = str[0];

  //find all str combination iterative and order
  for (let i = 0; i < str.length; i++) {
    let currStr = str[i];
    for (let j = i + 1; j < str.length; j++) {
      currStr = currStr + str[j];
      longestPad = longestStrPad(currStr, longestPad);
    }
  }
  console.log("longest palidrome string v1", longestPad);
}

function longestStrPad(str1, str2) {
  return isPalidrome(str1) ? longestStr(str1, str2) : str2;

  function isPalidrome(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
      if (str[i] !== str[j]) return false;
      i++;
      j--;
    }

    return true;
  }
}

function longestStr(str1, str2) {
  console.log("str1", str1);
  console.log("str2", str2);
  return str1.length > str2.length ? str1 : str2;
}

bfLongestPalidrome(string);
bfLongestPalidrome(string1);
bfLongestPalidrome(string2);

/**
 *  Start palidrom search from the middle
 *  bc the longest palidrome will be in the mid
 *
 *   Big O(n^2)
 *   Big Ω(n)
 *
 */

function longestPalidrome(str) {
  let i = Math.floor(str.length / 2);
  let j = i + 1;
  let count = 0;
  let longestPad = "";
  while (i != 0 || j != str.length) {
    console.log("what is count", count);
    if (i != 0) {
      let currPad = expandMiddle(i, str);
      longestPad = longestStr(currPad, longestPad);
      i--;
    }

    if (j != 0) {
      let currPad = expandMiddle(j, str);
      longestPad = longestStr(currPad, longestPad);
      j++;
    }
  }
  count++;
  console.log("longest palidrome string v2", longestPad);
}

function expandMiddle(i, str) {
  let str1 = validPalidrome(i, i + 1, str);
  let str2 = validPalidrome(i - 1, i + 1, str);
  return longestStr(str1, str2);
}

function validPalidrome(i, j, str) {
  let longestPad = str[i + 1];
  let left = i;
  let right = j;

  while (left > 0 || right < str.length) {
    if (str[left] !== str[right]) {
      return longestPad;
    }
    longestPad = str.slice(i, j);
    left--;
    right++;
  }
}

longestPalidrome(string);
longestPalidrome(string1);
longestPalidrome(string2);
