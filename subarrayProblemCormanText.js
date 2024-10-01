const  findMaximumSubArray = require('./maximumSubArrayProblem');
const  bruteForceSubArray = require('./bruteForceSubArray');

console.time("recursive 5");
console.log(findMaximumSubArray([1, 5, 7, -5, -2, 7, -2, 9], 0, 7));
console.timeEnd("recursive 5");

console.time("bruteforce 5");
console.log(bruteForceSubArray([1, 5, 7, -5, -2, 7, -2, 9]));
console.timeEnd("bruteforce 5");

function generateRandomArray(length){
  // generate random array
  for(let i = 0; i < length; i++){
    let randomNumber = Math.sign(Math.random()-0.5);
    console.log(randomNumber); 
  }
}

generateRandomArray(10);
