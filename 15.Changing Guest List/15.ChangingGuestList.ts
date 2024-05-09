// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

let guestList1: string[] = ['Alice', 'Rose', 'Anna', 'Robert', 'Emily'];
let message3: string = 'You are invited to the dinner party this weekend.';
guestList1.map((i: any) => console.log(`Hi ${i}, ${message3}\n`));

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let absentGuest = guestList1[1];
console.log(`\n\nWe are sorry to inform you that ${absentGuest} won't be able to attend the dinner party.\n\n`)
// • Print a second set of invitation messages, one for each person who is still in your list.
guestList1.splice(1, 1, "Peter");
guestList1.map(function (guests: any) {
    return console.log(`Hi ${guests}, ${message3}\n`)
});
