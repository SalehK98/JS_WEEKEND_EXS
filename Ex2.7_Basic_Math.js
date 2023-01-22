/* Your task is to create a function that does four basic . 
The function should take three arguments - operation(string/char), value1(number), 
value2(number). 
The function should return result of numbers after applying the chosen operation. 
Examples 
basicOp('+', 4, 7)         // Output: 11 
basicOp('-', 15, 18)       // Output: -3 
basicOp('*', 5, 5)         // Output: 25 
basicOp('/', 49, 7)        // Output: 7 */


// How to solve:
// built in function eval() or Function("return " + expression)()
// without built it could use if statement or switch or object with functions as value and opr as key

const basicOp = (opr, num1, num2) => {
    // return eval(num1 + opr + num2)
    const expression = num1 + opr + num2
    return Function("return " + expression)()
}


console.log(basicOp('-', 15, 18))       // expected Output: -3 
console.log(basicOp('*', 5, 5))         // expected Output: 25 
console.log(basicOp('/', 49, 7))        // expected Output: 7 
console.log(basicOp('+', 4, 7))        // expected Output: 11