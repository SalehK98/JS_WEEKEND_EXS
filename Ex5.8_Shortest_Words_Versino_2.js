/* Given a string of words, return the longest word[s]. 
String will never be empty and you do not need to account for different data types.*/



// solve either by map+Math.max or reduce 
const longestWord = str => {
    const arr = str.split(" ")
    const max = arr.reduce((max, word) => {
        return max > word.length ? max : word.length
    }, 0)

    return max
}


console.log(longestWord("saleh kalouti is a javascript dev.")); // expected output 10 (v)