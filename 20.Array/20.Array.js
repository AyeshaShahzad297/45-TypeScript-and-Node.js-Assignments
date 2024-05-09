"use strict";
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let countries = [];
countries.push('Canada');
countries.push('New Zealand');
countries.push('Poland');
countries.unshift('Africa');
countries.splice(1, 0, 'Australia');
console.log(countries);
