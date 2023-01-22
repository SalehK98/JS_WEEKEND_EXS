/* Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same 
string with all even indexed characters in each word upper cased, and all odd indexed 
characters in each word lower cased. The indexing just explained is zero based, so the zero-ith 
index is even, therefore that character should be upper cased. 
The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only 
be present if there are multiple words. Words will be separated by a single space(' '). 
Examples: 
toWeirdCase( "String" );//=> returns "StRiNg" 
 
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe" */


const toWeirdCase = str => {
    const arr = str.split(" ")
    for (let i = 0; i < arr.length; i++) {
        arr[i] = [...arr[i]]
    }

    arr.forEach((element, index) => {
        element.forEach((el, idx) => {
            if (idx % 2 === 0) {
                element[idx] = el.toUpperCase()
            }
        })
        arr[index] = element.join("")
    });


    return arr.join(" ")
}


console.log(toWeirdCase("weird string case"));// => returns "WeIrD StRiNg CaSe" */
