/* Implement the following methods -
-	Filter
-	ForEach
-	Map
Using only for(), array and objects (without other js methods) */



// i do not understand the question 

const filter = arr => {
    const arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr2.push(arr[i])
        }
    }
    return arr2
}

