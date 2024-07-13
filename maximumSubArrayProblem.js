/**
 * Algorithm for maximum subarray problem
 * input and output as array (includes negative numbers)
 */

function findMaxCrossingSubArray(array, low, mid, high) {
  let sum = null;

  let leftSum = null,
    maxLeft = mid;
  sum = 0;
  for (let i = mid; i >= low; i--) {
    sum = sum + array[i];
    if (sum > leftSum || typeof leftSum == null) {
      leftSum = sum;
      maxLeft = i;
    }
  }

  let rightSum = null,
    maxRight = mid + 1;
  sum = 0;
  for (let i = mid + 1; i <= high; i++) {
    sum = sum + array[i];
    if (sum > rightSum || typeof rightSum == null) {
      rightSum = sum;
      maxRight = i;
    }
  }

  return { startIndex: maxLeft, endIndex: maxRight, sum: leftSum + rightSum };
}

function findMaximumSubArray(array, low, high) {
  let mid = null;
  let leftData = null;
  let rightData = null;
  let crossData = null;
  if (low == high) {
    return { startIndex: low, endIndex: high, sum: array[low] };
  } else {
    mid = Math.floor((low + high) / 2);

    leftData = findMaximumSubArray(array, low, mid);
    rightData = findMaximumSubArray(array, mid + 1, high);
    crossData = findMaxCrossingSubArray(array, low, mid, high);
  }

  if (leftData.sum > rightData.sum && leftData.sum > crossData.sum) {
    return leftData;
  } else if (rightData.sum > leftData.sum && rightData.sum > crossData.sum) {
    return rightData;
  } else {
    return crossData;
  }
}

// console.log(findMaximumSubArray([3, -5, -6, 7, -11, 16, -10, 5, -18], 0, 8));
