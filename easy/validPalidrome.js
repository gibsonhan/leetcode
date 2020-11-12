/*
	santize the input

*/
let str1 = "A man, a plan, a canal: Panama";
let str2 = "race a car";

function isValidPalidrom(str) {
  //remove all non alphanumeric and white space
  let s = str.replace(/[^0-9a-zA-Z]/g, "");
  s = s.toLowerCase();

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) {
      console.log("false");
      return null;
    }
    i++;
    j--;
  }
  console.log("true");
}

isValidPalidrom(str1);
isValidPalidrom(str2);
