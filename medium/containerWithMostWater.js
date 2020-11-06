let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let height2 = [4, 3, 2, 1, 4];
let height3 = [1, 2, 1];

function checkWater(arr) {
  let mostWater = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let currWater = calcWater(i, j, arr);
      mostWater = currWater > mostWater ? currWater : mostWater;
    }
  }
  console.log("what is mostWater", mostWater);

  function calcWater(i, j, arr) {
    let min = arr[i] < arr[j] ? arr[i] : arr[j];
    let dist = j - i;
    return min * dist;
  }
}

checkWater(height);
checkWater(height2);
checkWater(height3);
