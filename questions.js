//----------------------EX - 1-----------------------------------
//Write a js program that takes two nums and return true if one or both the nums are 100 
// or if they add up to 100



// console.log(checker(0, 100))
// console.log(checker(100, 0))
// console.log(checker(10, 0))
// console.log(checker(10, 20))
// console.log(checker(20, 80))
// console.log(checker(50, 50))
//----------------------EX - 2 -----------------------------------
//write a program  to get the extension of a filename

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('jsfile.html'))
//----------------------EX - 3 -----------------------------------
//Write a js program to replace every charecter in a given string
//with the character following it in the alphabet

const moveCharsForward = (str) => str.split('').map(char => 
    String.fromCodePoint(char.codePointAt(0) + 1)).join('');


console.log(moveCharsForward('good'))
//----------------------EX - 4-----------------------------------
// Write a js program to get the current DateExpected Output: mm--dd--yyy or 
// dd-mm-yyyy, dd/mm/yyyy

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();

    return `${months}--${days}--${years}`
}


console.log(formatDate())
//----------------------EX - 5 -----------------------------------
// Write a Js Program to create a new string adding "New!" in front of a given string 
// if the given string begins  with "New!" already then return the orignal string



// console.log(addNew('Offer'))

//----------------------EX - 6 -----------------------------------
// Write a Js program to create a new string from a given string taking the first 3 
// characters of a string and adding them together. The String length must be 3 or more if 
// not, the orignal string is returned




// console.log(makeNewString('abc'))
// console.log(makeNewString('dfaddfs'))
// console.log(makeNewString('34sddsda'))
// console.log(makeNewString('absdsc'))
// console.log(makeNewString('ab'))


//----------------------EX - 7 -----------------------------------
//Write a js program to extract the first half of a string of even length



// console.log(firstHalf('temp'));
// console.log(firstHalf('temple'));
// console.log(firstHalf('temples'));
// console.log(firstHalf('templers'));