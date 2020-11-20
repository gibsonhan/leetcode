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
