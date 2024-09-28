const  findMaximumSubArray = require('./maximumSubArrayProblem');

console.time("recursive 5");
console.log(findMaximumSubArray([1, 5, 7, -5, -2, 7, -2, 9], 0, 7));
console.timeEnd("recursive 5");
