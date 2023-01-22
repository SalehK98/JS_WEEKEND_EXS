/* This time no story, no theory. The examples below show you how to write function
accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy" accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a .. z and A .• z.*/


const accum = str => {
    const arr = str.split("").map((el, idx) => {
        let newEl = el.toUpperCase() + el.toLowerCase().repeat(idx)
        return newEl
    })
    return arr.join("-")
}

console.log(accum("abcdef"));
console.log(accum("RqaEzty"));