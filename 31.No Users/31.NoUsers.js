"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let userNames1 = ['Admin', 'Eric', 'Henry', 'Peter', 'Jack'];
if (userNames1.length !== 0) {
    console.log(userNames1);
}
// • Remove all of the usernames from your array, and make sure the correct message is printed.
userNames1.splice(0, 5); //userName1 = [];
// • If the list is empty, print the message We need to find some users!
if (userNames1.length === 0) {
    console.log('We need to find some users!');
}
