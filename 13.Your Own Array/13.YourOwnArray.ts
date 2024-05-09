// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation: string[] = ["Rolls-Royce", "Ferrari", "BMW", "Aston Martin"];
transportation.map(function (i: any) {
    return console.log(`i would like to own ${i} one day.`)
});
//transportation.map((i)=> console.log(`i would like to own ${i} one day.`));