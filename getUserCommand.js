const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const initialUserCommands = process.argv.slice(2);

const parsedUserCommands = {
  actionCommand: initialUserCommands[0],
  actionName: initialUserCommands[1],
  shiftCommand: initialUserCommands[2],
  shiftValue: initialUserCommands[3],
  inputCommand: initialUserCommands[4],
  inputValue: initialUserCommands[5],
  outputCommand: initialUserCommands[6],
  outputValue: initialUserCommands[7],
};

readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`)
  readline.close()
})

export {parsedUserCommands};
