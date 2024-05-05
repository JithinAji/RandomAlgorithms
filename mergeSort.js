/**
 * Algorithm for merge sort
 * input and output as array
 */

function merge(inputArr, start, mid, end) {
  let n1 = mid - start + 1;
  let n2 = end - mid;
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i <= n1; i++) {
    leftArr[i] = inputArr[start + i];
  }
  leftArr[n1] = "end";
  for (let i = 0; i < n2; i++) {
    rightArr[i] = inputArr[mid + 1 + i];
  }
  rightArr[n2] = "end";
  let i = 0;
  let j = 0;
  let newArr = [];
  for (let k = start; k <= end; k++) {
    if (rightArr[j] == "end") {
      inputArr[k] = leftArr[i];
      i = i + 1;
    } else if (leftArr[i] == "end") {
      inputArr[k] = rightArr[j];
      j = j + 1;
    } else if (leftArr[i] <= rightArr[j]) {
      inputArr[k] = leftArr[i];
      i = i + 1;
    } else {
      inputArr[k] = rightArr[j];
      j = j + 1;
    }
    newArr[k] = inputArr[k];
  }
}

function mergeSort(arr, start, end) {
  let mid;
  if (start < end) {
    mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }
  return arr;
}

// console.log(mergeSort([3, 2, 6, 1, 5, 1, 9, 4, 6, 8, 7, 9], 0, 11));
