"use strict";
function createCar(manufacturer, model, ...optional) {
    const car = {
        manufacturer,
        model
    };
    for (let [key, value] of optional) {
        car[key] = value;
    }
    return car;
}
const carInfo = createCar('Toyota', 'Fortuner', ['color', 'Black'], ['year', 2024], ['transmission', 'Automatic']);
console.log(carInfo);
