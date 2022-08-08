//REMOVE BLANKS
//Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// Examples:
// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"
//Make a new string initialized to a blank string THEN Loop through given string THEN if current character is not a space then concatenate with new string

function removeBlanks(str) {
    let brandNew = ''
    for(let i=0; i < str.length; i++) {
        if(str[i] != ' ') {
            brandNew += str[i]
        }
    }
    return brandNew
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c"))

//GET DIGITS
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().
// Examples:
// getDigits("abc8c0d1ngd0j0!8") => 801008
// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680
//Make a new string for character in string if the character is a number then concatenate into a new string

function getDigits(str) {
    let newNum = ''
    for(let char in str) {
        if(!isNaN(str[char])){
            newNum += str[char]
        }
    }
    return Number(newNum)
}
console.log(getDigits("0as1a3y5w7h9a2t4?6!8?0"))

//ACRONYMS
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().
// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".
//Loop through wordsArr THEN grab the first letter to Uppercase THEN concatenate that letter into an acronyms string

function acronym(str) {
    let wordsArr = str.split(' ')
    let acronymStr = ''
    for(let word in wordsArr) {
        if(wordsArr[word].length > 0) {
            acronymStr += wordsArr[word][0].toUpperCase()
        }
    }
    return acronymStr
}
console.log(acronym("Live from New York, it's Saturday Night!"))

//COUNT NON-SPACES
// Create a function that, given a string, returns the number of non-space characters found in the string. 
// Examples:
// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11
//Loop through the string if the character is not a space increment counter

function countNonSpaces(str) {
    let counter = 0
    for(let characters in str) {
        if(str[characters] != ' ') {
            counter++
        }
    }
    return counter
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"))

//REMOVE SHORTER STRINGS
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
// Examples:
// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']
//initialize new array THEN initialize nextIndex variable THEN loop through array if the value is greater than or equal to len add value to new string

function removeShorterStrings(arr, len) {
    let newStrings = []
    let newIndex = 0
    for(let value in arr) {
        if(arr[value].length >= len) {
            newStrings[newIndex++] = arr[value]
        }
    }
    return newStrings
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'Earth', 'says', 'hello'],3))


