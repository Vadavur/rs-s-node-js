// import { readFileSync } from "fs";

async function writeTextToUser(outputText, action) {
  console.log(`Your ${action}d text is:\n${outputText}`);
}

export { writeTextToUser };
