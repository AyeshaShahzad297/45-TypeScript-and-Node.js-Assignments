"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
const favorite_fruits = ['Mangoes', 'Water Melons', 'Bananas'];
if (favorite_fruits.includes('Mangoes')) {
    console.log('You really like Mangoes.');
}
if (favorite_fruits.includes('Water Melons')) {
    console.log('You really like Water Melons.');
}
if (favorite_fruits.includes('Bananas')) {
    console.log('You really like Bananas.');
}
if (!favorite_fruits.includes('Strawberries')) {
    console.log("Sorry! We don't have that fruit.");
}
if (!favorite_fruits.includes('Cherries')) {
    console.log("Sorry! We don't have that fruit.");
}
