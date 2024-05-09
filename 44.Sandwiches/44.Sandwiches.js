"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...ingredients) {
    console.log('\nOrder Summary:\nIngredients:');
    if (ingredients.length === 0) {
        console.log("You have not selected the ingredients you want in your sandwich.");
    }
    else {
        ingredients.forEach((ingredients, i) => {
            console.log(`${i + 1}. ${ingredients}.`);
        });
    }
    return ingredients;
}
make_sandwich();
make_sandwich("Lettuce", "Tomato", "Chicken", "Onion", "Mayo");
make_sandwich("Lettuce", "Tomato", "Beef Patty", "Onion", "Mayo");
make_sandwich("Lettuce", "Tomato", "Cheese", "Onion", "Garlic Mayo");
