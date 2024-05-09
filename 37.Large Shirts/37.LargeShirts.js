"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt1(size = 'large', text = 'I love TypeScript') {
    console.log(`You have ordered a ${size} sized shirt that has '${text}' printed on it.`);
}
make_shirt1();
make_shirt1('medium');
//Different message.
make_shirt1('small', 'I like programming.');
