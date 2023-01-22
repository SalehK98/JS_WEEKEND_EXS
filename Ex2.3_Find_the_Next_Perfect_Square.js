/* You might know some pretty large perfect squares. But what about the NEXT one? 
 
Complete the findNextSquare method that finds the next integral perfect square after the one 
passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is 
also an integer. 
 
If the parameter is itself not a perfect square then -1 should be returned. You may assume the 
parameter is positive. 
 
Examples: 
 
findNextSquare(121) --> returns 144 
findNextSquare(625) --> returns 676 
findNextSquare(114) --> returns -1 since 114 is not a perfect */

// How to solve:
// if the sqrt of the given square modules one is not zero means it is not a perfect square so we return -1
// if is a perfect square, we find  square root then add one then we square 

const findNextSquare = sq => {
    if (Math.sqrt(sq) % 1 !== 0) return -1
    return (Math.sqrt(sq) + 1) ** 2
}


console.log(findNextSquare(121)); // expected output 144 (v)
console.log(findNextSquare(625)); // expected output 676 (v)
console.log(findNextSquare(114)); // expected output -1 (v)