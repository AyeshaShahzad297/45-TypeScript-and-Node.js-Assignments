// Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface typeScriptObject {
    name: string,
    age: number,
    class: number,
    rollNo: number,
    email: string,
    hobbies: string[]
}

let student: typeScriptObject = {
    name: 'Ali',
    age: 10,
    class: 5,
    rollNo: 12,
    email: 'abc@xyz.com',
    hobbies: ['Basketball', 'Badminton', 'Reading', 'Travelling']
}

console.log(student);