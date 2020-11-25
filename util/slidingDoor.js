//Sliding door implementation where you save the entire array of door
function slidingDoor(arr, doorLen) {
  if (doorLen >= arr.length) {
    console.log(arr);
    console.log("end, door is either the size of array or too big\n");
    return null;
  }
  let store = [];
  let a = arr;

  for (let i = 0; i < a.length; i++) {
    let door = [a[i]];
    for (let j = i + 1; j < a.length; j++) {
      door = [...door, a[j]];

      if (door.length === doorLen) {
        store = [...store, door];
      }
    }
  }
  console.log("inital", a);
  console.log(store);
  console.log("end\n");
}

let a = [1, 2, 3, 3, 4, 5, 6];
let a2 = [-1, 0, 1, 2, -1, -4];

slidingDoor(a, 7);
slidingDoor(a2, 3);
