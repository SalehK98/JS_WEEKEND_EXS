/* Complete the method/function so that it converts dash/underscore delimited words into camel 
casing. The first word within the output should be capitalized only if the original word was 
capitalized (known as Upper Camel Case, also often referred to as Pascal case). 
 
Examples 
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior" 
 
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior" */


const toCamelCase = str => {
    let arr = []
    if (str.includes("-")) {
        arr = str.split("-")
        for (let i = 1; i < arr.length; i++) {
            console.log(arr);
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
        }

    } else if (str.includes("_")) {
        arr = str.split("_")
        arr.forEach(element => {
            element[0].toUpperCase()
        });
    }

    return arr.join("")
}

console.log(toCamelCase("the-stealth-warrior")); // expected output "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // expected output "TheStealthWarrior"