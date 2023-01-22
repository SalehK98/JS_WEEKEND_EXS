/* It's pretty straightforward. Your goal is to create a function that removes the first and last 
characters of a string. You're given one parameter, the original string. You don't have to worry 
with strings with less than two characters. */


// assuming the string is more than one word
const trimString = str => {
    const arr = str.split(" ")
    arr[0] = arr[0].slice(1)
    arr[arr.length - 1] = arr[arr.length - 1].slice(0, -1)
    return arr.join(" ")
}


console.log(trimString("saleh kalouti")); // expected output "aleh kalout"
console.log(trimString("saleh")); // expected output "ale"