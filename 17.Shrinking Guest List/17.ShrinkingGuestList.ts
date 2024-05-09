// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
let guestList3: string[] = ['Peter', 'Alice', 'Rose', 'Jack', 'Anna', 'Robert', 'Emily', 'Joey'];
for (let i = 0; i < guestList3.length; i++) {
    console.log(`Hi ${guestList3[i]}, We are sorry to inform you that our new dinner table won't arrive in time for the dinner, so we have space for only two guests.\n`);
}

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
for (let i = 2; i < guestList3.length; i++) {
    console.log(`Sorry ${guestList3[i]}, We won't be able to invite you to the dinner.\n`);
}
while (guestList3.length > 2) {
    guestList3.pop();
}
console.log("\nShrinked Guest List: ", guestList3);

// • Print a message to each of the two people still on your list, letting them know they’re still invited.
guestList3.map(function (guests) {
    return (console.log(`\nDear ${guests}, You are still invited to the dinner party.`));
})

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
while (guestList3.length != 0) {
    guestList3.pop();
}
console.log("\nEmpty List: ", guestList3);