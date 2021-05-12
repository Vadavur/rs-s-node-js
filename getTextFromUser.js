import { createInterface } from "readline";

async function getTextFromUser(action) {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  console.log(`No input file was set!\nPlease, type the text to ${action} below:`);
  for await (const line of readline) {
    readline.close();
    return line;
  }
}

export { getTextFromUser };
