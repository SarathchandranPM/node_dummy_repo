/*
const names = require("./3.module-1");
const sayHi = require("./4.module-2");
console.log(names); // { john: 'John', peter: 'Peter' }
console.log(sayHi); // [Function: sayHi]

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
*/

// You can also destructure names to make it more concise:

const { john, peter } = require("./3.module-1");
const sayHi = require("./4.module-2");
require("./6.mind-grenade"); // Since we're invoking the addValues function in the mind-grenade.js, it will be executed when this file is run as we're importing it. It will still run if you assign it to a variable even if we're not using the variable.

sayHi("Susan");
sayHi(john);
sayHi(peter);

// Import in export as you go method:

const data = require("./5.alternate_export");
console.log(data); // { items: [ 'item-1', 'item-2' ], singlePerson: { name: 'bob' } }
