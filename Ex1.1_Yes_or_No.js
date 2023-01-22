// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" 
// string for false.


// How to solve:
// create the method with one parameter v
// check if  parameter is true or false (boolean) and return result v

const yesOrNo = bool => {
    return bool ? "Yes" : "No"
}

console.log(yesOrNo(true)); // expected output "Yes"
console.log(yesOrNo(false)); // expected output "No"