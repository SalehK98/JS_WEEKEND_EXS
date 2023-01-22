// Create a function that returns the sum of the two lowest positive numbers given an array of 
// minimum 4 positive integers. No floats or non-positive integers will be passed. 
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. 
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// How to solve:
// create a function that takes one parameter - v
// find the lowest positive integer - v 
// find the second lowest integer - v 
// sum the two integers and return result -v 

const sumOfLowestNumbers = arr => {
    arr.sort((a, b) => {
        return a - b
    })
    return arr[0] + arr[1]
}

console.log(sumOfLowestNumbers([19, 5, 42, 2, 77])); // expected output 7 
console.log(sumOfLowestNumbers([10, 343445353, 3453445, 3453545353453])); // expected output 3453455