"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let guestList2 = ['Alice', 'Rose', 'Anna', 'Robert', 'Emily'];
let message4 = 'You are invited to the dinner party this weekend. Since we have found a bigger table, so we are inviting three more guests to the dinner party';
guestList2.map((i) => console.log(`Hi ${i}, ${message4}\n`));
// • Add one new guest to the beginning of your array.
guestList2.unshift('Peter');
// • Add one new guest to the middle of your array.
guestList2.splice(2, 0, 'Jack');
//  • Use append() to add one new guest to the end of your list.
guestList2.push('Joey');
//  • Print a new set of invitation messages, one for each person in your list.
for (let i = 0; i < guestList2.length; i++) {
    console.log(`\nHi ${guestList2[i]}, You are cordially invited to our dinner party.\nThank You!\n`);
}
