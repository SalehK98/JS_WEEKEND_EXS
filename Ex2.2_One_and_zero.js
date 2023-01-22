/* Given an array of ones and zeroes, convert the equivalent binary value to an integer. 
 
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1. 
 
Examples: 
 
Testing: [0, 0, 0, 1] ==> 1 
Testing: [0, 0, 1, 0] ==> 2 
Testing: [0, 1, 0, 1] ==> 5 
Testing: [1, 0, 0, 1] ==> 9 
Testing: [0, 0, 1, 0] ==> 2 
Testing: [0, 1, 1, 0] ==> 6 
Testing: [1, 1, 1, 1] ==> 15 
Testing: [1, 0, 1, 1] ==> 11 
However, the arrays can have varying lengths, not just limited to 4. */


// How to solve:
// create a function that takes an array as a parameter (v)
// join array to string (v)
// parse the string zero and one (binary) to integer (decimal) by specifying the string is in base 2. (v)
const oneAndZero = arr => {
    return parseInt(arr.join(""), 2)
}

console.log(oneAndZero([1, 1, 1, 1])); // expected output 15 (v)
console.log(oneAndZero([1, 0, 0, 1])); // expected output 9 (v)
console.log(oneAndZero([1, 0, 0, 1, 1, 0, 0, 1])); // expected output 153 (v)