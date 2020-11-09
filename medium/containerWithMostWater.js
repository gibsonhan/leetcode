let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let height2 = [4, 3, 2, 1, 4];
let height3 = [1, 2, 1];


function checkWater(arr) {
  let largestArea = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let currWater = calcArea(i, j, arr);
      largestArea = Math.max(currWater, largestArea)
    }
  }

  console.log('largest Area', largestArea)
}

checkWater(height);
checkWater(height2);
checkWater(height3);

/** 2pointer
 *  left < right
 *    calc area
 *    check if area is larges
 */

function checkWater2Pointer(arr) {
  let i = 0;
  //start the increment out of bound
  //bc algro stepping requires decrement
  let j = arr.length;
  let largestArea = 0

  while (i < j) {

    j--;
    let currArea = calcArea(i, j, arr)
    largestArea = Math.max(currArea, largestArea)

    i++;
    let currArea2 = calcArea(i, j, arr)
    largestArea = Math.max(currArea2, largestArea)
  }
  console.log('largest Area v2', largestArea)
}

function calcArea(i, j, arr) {
  let minHeight = Math.min(arr[i], arr[j])
  let dist = j - i
  return dist * minHeight
}

checkWater2Pointer(height)
checkWater2Pointer(height2)
checkWater2Pointer(height3)