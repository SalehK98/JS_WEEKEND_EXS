/* There is an array with some numbers. All numbers are equal except for one. Try to find it! 
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2 
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 
It’s guaranteed that array contains at least 3 numbers. */


// How to solve:
/* sort array => the unique element if bigger will be at the end of the array (index -1)
if smaller will be at the index 0 so we check if index 0 and index 1 values are similar 
then element is bigger and at index -1 if the value is not the same then the element is smaller 
and at index 0 */

const findUnique = arr => {
    const arr2 = arr.sort((a, b) => {
        return a - b
    })
    return arr2[0] === arr2[1] ? arr2[arr2.length - 1] : arr2[0]
}


console.log(findUnique([1, 1, 1, 2, 1, 1])) // expected output  2 (v)
console.log(findUnique([0, 0, 0.55, 0, 0])) // expected output 0.55 (v)
console.log(findUnique([5, 5, 5, 3, 5, 5])) // expected output 3 (v)