// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList: string[] = ['Alice', 'Rose', 'Anna', 'Robert', 'Emily'];
let message2: string = 'You are invited to the dinner party this weekend.';
guestList.map((i: any) => console.log(`Hi ${i}, ${message2}`));