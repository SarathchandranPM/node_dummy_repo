const { readFileSync, writeFileSync } = require("fs");

console.log("Start...");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
const testFile = readFileSync("./content/testFile.js", "utf8");

console.log(first); // Hello... This is first text file.
console.log(second); // Hello... This is second text file.
console.log(testFile); // console.log("Hello there...");

// Assuming a result-sync.txt file already exist in content
writeFileSync(
  "./content/result-sync.txt",
  `Here's the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("Finished with the task");
console.log("Starting next task");

/* 
Reading and writing files may take sometime to finish. During all these time, your app is essentially frozen and no other user can do anything until the tasks are completed. If we follow synchronous approach, the execution take place line by line. The app can only proceed with the next task only when the already running one completed. Use synchronous methods only in specific scenarios where:

- The operation involves a single, small file and blocking the event loop momentarily is acceptable.

- You need a simpler code structure for learning purposes (but be aware of potential performance implications).

It is generally recommended to use the async method.
*/
