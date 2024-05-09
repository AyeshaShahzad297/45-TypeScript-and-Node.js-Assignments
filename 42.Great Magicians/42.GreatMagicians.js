"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
const magicians1 = ['Harry Houdini', 'David Copperfield', 'Criss Angel'];
function show_magicians(magicians1) {
    for (let i of magicians1) {
        console.log(`${i}.`);
    }
}
show_magicians(magicians1);
function make_great(magicians1) {
    const greatMagicians = magicians1.map(magicians => (`The Great Magician ${magicians}`));
    return (greatMagicians);
}
const greatMagiciansNames = make_great(magicians1);
console.log('\nModified List.\n');
show_magicians(greatMagiciansNames);
