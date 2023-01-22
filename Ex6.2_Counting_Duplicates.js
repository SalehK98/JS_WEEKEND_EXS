/* Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example
"abcde" -> 0 # no characters repeats more than once 
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice ('b' and 'B') 
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities"-> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
 */


const countDuplicates = str => {
    str = str.toLowerCase()
    const myMap = new Map()
    str.split("").forEach(element => {
        myMap.get(element) ? myMap.set(element, myMap.get(element) + 1) : myMap.set(element, 1)
    });

    let count = 0
    myMap.forEach((val) => {
        if (val > 1) count++
    }
    )
    return count
}


console.log(countDuplicates("abcde")); // -> 0 # no characters repeats more than once
console.log(countDuplicates("aabbcde")); // 2 # 'a' and 'b'
console.log(countDuplicates("aabBcde")); // -> 2 # 'a' occurs twice and 'b' twice ('b' and 'B') 
console.log(countDuplicates("indivisibility")); // -> 1 # 'i' occurs six times
console.log(countDuplicates("Indivisibilities")); // -> 2 # 'i' occurs seven times and 's' occurs twice
console.log(countDuplicates("aA11")); // -> 2 # 'a' and '1'
console.log(countDuplicates("ABBA")); // -> 2 # 'A' and 'B' each occur twice
