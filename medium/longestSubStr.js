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
