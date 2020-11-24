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
  let longestPad = "";

  //find all str combination iterative and order
  for (let i = 0; i < str.length; i++) {
    let s = str[i];
    for (let j = i + 1; j < str.length; j++) {
      s += str[j];
      longestPad = longestStrPad(s, longestPad);
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
  let len = 0;
  let len1 = 0;
  let len2 = 0;
  let longestLen = 0;
  let start = 0;
  let end = 0;

  for (let i = 0; i < str.length; i++) {
    len1 = middleExpand(i, i, str);
    len2 = middleExpand(i, i + 1, str);
    len = Math.max(len1, len2);
    if (len > longestLen) {
      longestLen = len;
      //update the indices of current longest palidrome
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  console.log(str.slice(start, end + 1));
}

function middleExpand(left, right, str) {
  let l = left;
  let r = right;

  while (l >= 0 && r < str.length && str[l] === str[r]) {
    l--;
    r++;
  }

  return r - l - 1;
}

longestPalidrome(string);
longestPalidrome(string1);
longestPalidrome(string2);
