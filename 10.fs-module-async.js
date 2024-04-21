const { readFile, writeFile } = require("fs");

console.log("Start...");

readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;

  readFile("./content/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(result); // Undefined
        console.log("Done with this task");
      }
    );
  });
});

console.log("Starting next task...");

/*
Here, the line console.log("Starting next task...") executed before console.log("Done with this task"). 
That is, the application is ready to continue with the next task meanwhile the first one is already in progress. When this task is completed we'll see "Done with this task" printed in the console. 
By following the async approach, multiple user can perform read and write task at the same time, without blocking others. 
*/