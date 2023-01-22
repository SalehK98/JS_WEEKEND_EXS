/* Simple, given a string of words, return the ​length​ of the shortest word(s). 
String will never be empty and you do not need to account for different data types. */

const shortestWord = str => {
    let i = 1;
    while (true) {
        if (str.split(" ").some((el) => el.length === i)) {
            break;
        }
        i++
    }
    return i
}

console.log(shortestWord("bitcoin take over the world maybe who knows perhaps"))
console.log(shortestWord("turns out random test cases are easier than writing out basic ones"))
console.log(shortestWord("Let's travel abroad shall we"))