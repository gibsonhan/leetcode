let str = "bbbbbbb";
let str2 = "abcabcbb";
let str3 = "pwwkew";

function longestSubString(str) {
  let cache = {};
  for (let i = 0; i < str.length; i++) {
    let s = str[i];
    if (cache[s] === undefined) cache[s] = s;
    for (let j = i + 1; j < str.length; j++) {
      s = s + str[j];
      if (cache[s] === undefined) cache[s] = s;
    }
  }

  findLongestSubString(cache);
}

function findLongestSubString(obj) {
  let arr = Object.keys(obj);
  let longest = "";

  arr.forEach((str) => {
    let uniqueChar = {};
    let i = 0;
    while (i < str.length && uniqueChar[str[i]] === undefined) {
      uniqueChar[str[i]] = true;
      i++;
    }

    let substring = i === 0 ? str[0] : str.slice(0, i);
    longest = longest.length > substring.length ? longest : substring;
  });

  console.log(longest);
}

longestSubString(str);
longestSubString(str2);
longestSubString(str3);

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s || s.length === 0) return 0;

  let set = new Set();
  let front = 0;
  let back = 0;
  let longest = 0;

  while (back < s.length) {
    if (!set.has(s.charAt(back))) {
      set.add(s.charAt(back));
      longest = Math.max(set.size, longest);
      back++;
    } else {
      set.delete(s.charAt(front));
      front++;
    }
  }

  char = (pos) => {
    s.charAt(pos);
  };

  return longest;
};
