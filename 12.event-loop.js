const { readFile } = require("fs");

console.log("Started a task...");

readFile("./content/first.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res);
  console.log("Task completed.");
});

console.log("Started next task...");

/*
The above code will be executed in below order:

Started a task...
Started next task...
Hello... This is first text file.
Task completed.
*/
