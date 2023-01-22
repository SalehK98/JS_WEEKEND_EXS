/* The first century spans from the year 1 up to and including the year 100, The second - from the 
year 101 up to and including the year 200, etc. 
Task : 
Given a year, return the century it is in. 
Input , Output Examples :: 
centuryFromYear(1705)  returns (18) 
centuryFromYear(  1900)  returns (19) 
centuryFromYear(1601)  returns (17) 
centuryFromYear(2000)  returns (20)  */


// How to solve:
// for every year over 100 the century is the year deviled by 100 + 1 
// except the edge years like 2000, 1800 that end in zero the century is the year deviled by 100
// (Math.floor to remove everything after the decimal)

const centuryFromYear = year => {
    if (year < 0) return "before bc"
    return year <= 100 ? 1 : (year / 100) % 1 === 0 ? year / 100 : Math.floor((year / 100)) + 1
}

console.log(centuryFromYear(1705)) // expected output (18) 
console.log(centuryFromYear(1900)) // expected output (19) 
console.log(centuryFromYear(1601)) // expected output (17) 
console.log(centuryFromYear(2000)) // expected output (20) 
