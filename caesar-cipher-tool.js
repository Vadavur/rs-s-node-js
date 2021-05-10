import { getArgsAndStatus } from "./getArgsAndStatus.js";
import { checkForMandatoryArgsErrors } from "./checkForMandatoryArgsErrors.js";
import { checkForFilePathErrors } from "./checkForFilePathErrors.js";
import { MandatoryError } from "./MandatoryError.js";
import { FilePathError } from "./FilePathError.js";

const initialUserCommand = process.argv.slice(2);

const parsedUserCommand = getArgsAndStatus(initialUserCommand);

try {
  checkForMandatoryArgsErrors(parsedUserCommand);
  checkForFilePathErrors(parsedUserCommand);
} catch (error) {
  if (error instanceof MandatoryError) {
    error.message;
  }
  if (error instanceof FilePathError) {
    error.message;
  }
}

// console.log(parsedUserCommand);

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// readline.question(`What's your name?`, name => {
//   console.log(`Hi ${name}!`)
//   readline.close()
// })
