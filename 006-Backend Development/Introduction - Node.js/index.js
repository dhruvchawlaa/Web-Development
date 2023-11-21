// var generateName = require('sillyname');

// Using ECMAScript module
import generateName from "sillyname";
import superheroes from "superheroes";

var sillyName = generateName();
var superName = superheroes.random();

console.log(`I am ${superName}.`);
console.log(`My sidekick is ${sillyName}.`);
