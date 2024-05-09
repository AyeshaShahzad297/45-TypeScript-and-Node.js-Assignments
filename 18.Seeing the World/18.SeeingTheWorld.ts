// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
const locations: string[] = ["Canada ", "Russia ", "Poland ", "Switzerland ", "Australia"];

// • Print your array in its original order.
console.log("Original Order: ", locations);

// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order: ", [...locations].sort()); //Spread Operator: Copies the elements of a particular array without affecting the original array. 

// • Show that your array is still in its original order by printing it.
console.log("Original Order: ", locations);

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reversed Alphabetical Order: ", [...locations].sort().reverse());

// • Show that your array is still in its original order by printing it again.
console.log("Original Order: ", locations);

// • Reverse the order of your list. 
console.log("Reversed Order: ", locations.reverse());

// Print the array to show that its order has changed.
console.log("Changed Order: ", locations);

// • Reverse the order of your list again.
console.log("Reversed Order: ", locations.reverse());

//  Print the list to show it’s back to its original order.
console.log("Original Order: ", locations);

// • Sort your array so it’s stored in alphabetical order. 
console.log("Alphabetical Order: ", locations.sort());

// Print the array to show that its order has been changed.
console.log("Changed Order: ", locations);

// • Sort to change your array so it’s stored in reverse alphabetical order. 
console.log("Reversed Alphabetical Order: ", locations.sort().reverse());

// Print the list to show that its order has changed.
console.log("Changed Order: ", locations);