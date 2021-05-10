import { createInterface } from "readline";

function getTextFromUser(action) {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`Put the text to ${action} below\n`, (text) => {
    readline.close();
    console.log(`${text}`);
  });
}

export { getTextFromUser };
