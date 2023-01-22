/* An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.
islsogram("Dermatoglyphics") == true islsogram
("aba") == false
islsogram("moOse") ==false// -- ignore letter case */



// another solution is to turn str to set and compare original array and set lengths
const isIsogram = str => {
    str = str.toLowerCase()
    const myMap = new Map()
    str.split("").forEach(element => {
        myMap.get(element) ? myMap.set(element, myMap.get(element) + 1) : myMap.set(element, 1)
    });

    const arr = [...myMap.values()]
    return arr.every(el => el === 1) ? true : false
}

console.log(isIsogram("Dermatoglyphics")); // expected output true (v)
console.log(isIsogram("aba")); // expected output false (v)
console.log(isIsogram("moOse")); // expected output false (v)