/* Write a program that finds the summation of every number from 1 to num. The number will 
always be a positive integer greater than 0. 
 
For example: 
summation(2) -> 3 
1 + 2 
 
summation(8) -> 36 
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 */


/*How to solve: 
    for loop and a sum variable iterate and  add one every iteration till reach num
    */


const summation = num => {
    let sum = 0;
    for (let i = 1; i < num + 1; i++) {
        sum += i
    }
    return sum
}

console.log(summation(1000000000)) // one billion -> expected output 500000000067109000
console.log(summation(10000000000)) // 10 billion -> expected output 50000000000067860000
console.log(summation(8000000000)) // 8 billion -> expected output 32000000000068380000
console.log(summation(8)) // expected output 36
console.log(summation(2)) // expected output 3

console.time("100 billion")
console.log(summation(100000000000)) // 100 billion -> expected output 4.999999999897965e+21
console.timeEnd("100 billion") // 100 billion: 2:55.942 (m:ss.mmm) /100 billion: 3:22.374 (m:ss.mmm)

