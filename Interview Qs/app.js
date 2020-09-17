// ****************** Bank of America Questions *****************************

// Remove duplicate characters within a string
let str = "glassdoor";

// Make a variable to hold the string without double characters
let noDouble = "";
// Loop through the characters in the variable
for (i = 0; i < str.length; i++){
    // If the character is NOT equal to the character that follows
    // add it to the variable without double characters
    if(str[i] !== str[i + 1]){
        noDouble += str[i]
    }
}
// *******************************************************************
// FizzBuzz
// write out the numbers 1-n but instead of multiples of 3 have it say "fizz"
// instead of multiples of 5 say "buzz"
// instead of multiples of both 5 and 3 say "fizz buzz"
// *********************************************************************

// Take a string and reverse it
let reversed = "";
for (i = str.length - 1; i >= 0; i--){
    reversed += str[i]
}
// ********************************************************************

// *********************** Ally Bank **************************
// Only 2 questions on Glassdoor
// 1. Take this image of a website and create it 
// 2. Impossible problem to solve and watch you attempt to solve it