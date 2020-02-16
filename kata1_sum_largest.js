// In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.

let sumLargestNumbers = function(data) {
    let newArray = data.sort(function(a, b) {
        return a -b });
        return newArray[0] + newArray[1];
};
  
  console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

  // expected output 
  // 11
  // 5
  // 126