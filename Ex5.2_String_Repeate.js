/* Write a function called repeat_str which repeats the given string src exactly count times. 
repeatStr(6, "I") // "IIIIII" 
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" */


const repeatStr = (n, str) => {
    return str.repeat(n)
}



console.log(repeatStr(6, "I"))// expected output "IIIIII" 
console.log(repeatStr(5, "Hello")) // expected output "HelloHelloHelloHelloHello" 