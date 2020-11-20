let string = "racecar";

let cache = [];
function genCombo(str) {
  for (let i = 0; i < str.length; i++) {
    let s = str[i];
    cache.push(s);
    for (let j = i + 1; j < str.length; j++) {
      s += str[j];
      cache.push(s);
    }
  }
  console.log(cache);
}

genCombo(string);
