import { getArgsAndStatus } from "./getArgsAndStatus.js";
import { checkForMandatoryArgsErrors } from "./checkForMandatoryArgsErrors.js";
import { checkForFilePathErrors } from "./checkForFilePathErrors.js";
import { MandatoryError } from "./MandatoryError.js";
import { FilePathError } from "./FilePathError.js";

class CaesarCipher {
  constructor(initialUserRequest) {
    this.initialUserCommand = initialUserRequest.slice(2);
    this.parsedUserCommand = getArgsAndStatus(this.initialUserCommand);
  }

  checkForErrors() {
    try {
      checkForMandatoryArgsErrors(this.parsedUserCommand);
      checkForFilePathErrors(this.parsedUserCommand);
    } catch (error) {
      if (error instanceof MandatoryError) {
        error.message;
      }
      if (error instanceof FilePathError) {
        error.message;
      }
    }
  }
}

const cipher = new CaesarCipher(process.argv);

cipher.checkForErrors();


// const inputText = getInputText(parsedUserCommand);

// const outputText = getOutputText(parsedUserCommand);

// console.log(parsedUserCommand);

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// readline.question(`What's your name?`, name => {
//   console.log(`Hi ${name}!`)
//   readline.close()
// })
