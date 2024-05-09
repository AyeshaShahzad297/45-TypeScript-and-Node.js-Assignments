"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
const personName1 = 'ayesha Shahzad';
console.log("Lower Case: " + personName1.toLowerCase());
console.log("Upper Case: " + personName1.toUpperCase());
function titleCase(line) {
    line = line.toLowerCase().split(' ');
    for (let i = 0; i < line.length; i++) {
        line[i] = (line[i].charAt(0).toUpperCase() + line[i].slice(1));
    }
    return line.join(' ');
}
console.log("Title Case: " + titleCase(personName1)); //title case using for loop.
// function titleCase(line: any) {
//   line = line.toLowerCase().split(' ').map(function (word: any) {
//     return (word.charAt(0).toUpperCase() + word.slice(1))
//   })
//   return line.join(' ')
// }
// console.log("Title Case: " + titleCase(personName1)); //title case using map method.
//  function titleCase(str:any){
//     str= str.toLowerCase().split(' ').map(function(word:any){
//       return(word.replace(word[0], word[0].toUpperCase()))
//     })
//     return str.join(' ');
//   }
// console.log("Title Case: " + titleCase(personName1)); //title case using replace method.
