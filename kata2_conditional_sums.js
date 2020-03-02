// Kata 2 - Conditional sums
/*
For this kata, we'll be adding only the numbers in the array which match the given condition.
*/

const conditionalSum = function(values, condition) {
    var sum = 0;
        for ( let i = 0; i < values.length; i++) {
            if ( values[i] % 2 === 0 && condition === "even") {
                sum += values[i];
            } else if (values[i] %  2 != 0 && condition === "odd") {
                sum += values[i];
        }
    }
    return sum;
};
  
  console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
  console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
  console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
  console.log(conditionalSum([], "odd"));

// expected output 
// 6
// 9
// 144
// 0
