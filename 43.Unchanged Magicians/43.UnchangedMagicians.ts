// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

const magicians2: string[] = ['Harry Houdini', 'David Copperfield', 'Criss Angel'];

function show_magicians(magicians2: string[]): void {
    for (let i of magicians2) {
        console.log(`${i}.`);

    }

}
function make_great(magicians2: string[]): string[] {
    const greatMagicians = magicians2.map(magicians => (`The Great Magician ${magicians}`));
    return (greatMagicians);

}
//Storing the array in the seperate array.
const greatMagiciansNames1: string[] = make_great(magicians2);

console.log('\nOriginal List\n');
show_magicians(magicians2)

console.log('\nModified List.\n');
show_magicians(greatMagiciansNames1);