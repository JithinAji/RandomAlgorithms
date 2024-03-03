/**
 * Add 2 n bit binary numbers and return the sum as
 * n+1 element array
 */

let addBinaryNumbers = (binaryArrayOne = [], binaryArrayTwo = []) => {
  let carry = 0;
  let arrayLengthOne = binaryArrayOne.length - 1;
  let arrayLengthTwo = binaryArrayTwo.length - 1;

  const sumOfBinaryArrays = [];
  let outputArrayLength =
    arrayLengthOne >= arrayLengthTwo ? arrayLengthOne + 1 : arrayLengthTwo + 1;

  while (outputArrayLength > -1) {
    let count = 0;
    binaryArrayOne[arrayLengthOne] == 1 ? (count += 1) : null;
    binaryArrayTwo[arrayLengthTwo] == 1 ? (count += 1) : null;
    carry == 1 ? (count += 1) : null;

    arrayLengthOne > -1 ? (arrayLengthOne -= 1) : null;
    arrayLengthTwo > -1 ? (arrayLengthTwo -= 1) : null;

    if (count > 2) {
      sumOfBinaryArrays[outputArrayLength] = 1;
      carry = 1;
    } else if (count > 1) {
      sumOfBinaryArrays[outputArrayLength] = 0;
      carry = 1;
    } else if (count > 0) {
      sumOfBinaryArrays[outputArrayLength] = 1;
      carry = 0;
    } else {
      sumOfBinaryArrays[outputArrayLength] = 0;
      carry = 0;
    }
    outputArrayLength -= 1;
  }
  return sumOfBinaryArrays;
};

// addBinaryNumbers([1, 1], [1, 0, 1]);
