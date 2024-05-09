"use strict";
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let array = [1, 2, 3, 'abc', 'xyz', true];
//Calling the index no. which are currently not present in the above mentioned array.
console.log(array[9]);
console.log(array[7]);
//Now printing the element that should be present to correct the error.
console.log(array[2]);
