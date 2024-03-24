/**
 * Algorithm for selection sort
 * input and output as array
 */

function selectionSort(arr) {
  for (let index = 0; index < arr.length; index++) {
    let small = arr[index];
    let position = index;
    for (let innerIndex = index + 1; innerIndex < arr.length; innerIndex++) {
      if (arr[innerIndex] < small) {
        small = arr[innerIndex];
        position = innerIndex;
      }
    }
    arr[position] = arr[index];
    arr[index] = small;
  }
  return arr;
}

//console.log(selectionSort([2, 3, 5, 6, 1, 4]));
