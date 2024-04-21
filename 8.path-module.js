const path = require("path");

console.log(path.sep); // \

const filePath = path.join("content", "subfolder", "test.js");
console.log(filePath); // content\subfolder\test.js

const base = path.basename(filePath);
console.log(base); // test.js

const dirName = path.dirname(filePath);
console.log(dirName); // content\subfolder

const absolute = path.resolve(filePath);
console.log(absolute); // C:\Users\sarathchandran\backend-practise\node-tutorial\content\subfolder\test.js
