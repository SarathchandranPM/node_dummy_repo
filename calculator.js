process.stdin.on("data", (chunk) => {
  const input = chunk.toString().trim();

  if (input === "quit") {
    process.exit(0);
  }

  try {
    const value = eval(input);
    console.log(`${value}`);
  } catch (err) {
    console.log("I don't know how to do that");
  }
});

process.stdout.write("Enter your simple equation: ");

/*
The above line serves the purpose of prompting the user for input, but the code can still function without it. The core functionality of evaluating user-provided expressions remains intact even if this line is removed. The event listener on process.stdin will still capture any input the user types, even without a prompt.

However, omitting this line significantly deteriorates the user experience. Without the prompt, the user might be confused about what the program expects and how to interact with it.  A clear prompt like this helps guide the user and clarifies the program's purpose.
*/
