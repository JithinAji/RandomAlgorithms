/**
 *
 * Brute force algorith for maximum sub array problem
 *
 * */

function bruteForceMaxSubArray(arr){
  let maxProfit = null;
  let startIndex = 0;
  let endIndex = 0;
  for(let index = 0; index < arr.length - 1; index++){
    for(let i = index+1; i < arr.length; i++){
      let newProfit = arr[i] - arr[index];
      if(maxProfit === null){
        maxProfit = newProfit;
        startIndex = index;
        endIndex = i;
      }
      else if(newProfit > maxProfit){
        maxProfit = newProfit;
        startIndex = index;
        endIndex = i;
      }
    }
  }
  return {profit: maxProfit, start: startIndex, end: endIndex};
}

module.exports = bruteForceMaxSubArray;

//console.log(bruteForceMaxSubArray([4, 3, 6, -4, 7, 8]));
