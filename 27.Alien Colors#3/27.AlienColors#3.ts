// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

//Version # 1
const AlienColor1 : string = 'green';
if(AlienColor1 === 'green'){
    console.log('Nice! You just earned 5 points.');
}else if(AlienColor1 === 'yellow'){
    console.log('\nGood Job! You just earned 10 points');
}else{
    console.log('\nCongratulations! You just earned 15 points.');
}
//Version # 2
const AlienColor2 : string = 'yellow';
if(AlienColor2 === 'green'){
    console.log('Nice! You just earned 5 points.');
}else if(AlienColor2 === 'yellow'){
    console.log('\nGood Job! You just earned 10 points');
}else{
    console.log('\nCongratulations! You just earned 15 points.');
}
//Version # 3
const AlienColor3 : string = 'red';
if(AlienColor3 === 'green'){
    console.log('Nice! You just earned 5 points.');
}else if(AlienColor3 === 'yellow'){
    console.log('\nGood Job! You just earned 10 points');
}else{
    console.log('\nCongratulations! You just earned 15 points.');
}