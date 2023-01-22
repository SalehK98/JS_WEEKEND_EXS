/* Usually when you buy something, you're asked whether your credit card number, phone number 
or answer to your most secret question is still correct. However, since someone could look over 
your shoulder, you don't want that shown on your screen. Instead, we mask it. 
Your task is to write a function maskify, which changes all but the last four characters into '#'. 
Examples 
maskify("4556364607935616") == "############5616" 
maskify(     "64607935616") ==      "#######5616" 
maskify(               "1") ==                "1" 
maskify(                "") ==                 "" 
 
// "What was the name of your first pet?" 
maskify("Skippy")                                   == "##ippy" 
maskify("Nananananananananananananananana Batman!") == 
"####################################man!"  */


const maskify = str => {
    if (str.length <= 3) return str
    const len = str.length
    const len2 = str.split("").slice(0, len - 4).length
    return "#".repeat(len2) + [...str].slice(len2).join("")
}

console.log(maskify("Nananananananananananananananana Batman!"))
console.log(maskify("4556364607935616")) // ==> "############5616" 
console.log(maskify("64607935616")) // ==>      "#######5616" 
console.log(maskify("1")) // ==>                "1" 
console.log(maskify("")) // ==>                 "" 

// "What was the name of your first pet?" 
console.log(maskify("Skippy"))   // ==> "##ippy"                  