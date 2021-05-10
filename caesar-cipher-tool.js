import { getArgsAndStatus } from "./getArgsAndStatus.js";
import { checkForMandatoryArgsErrors } from "./checkForMandatoryArgsErrors.js";
import { checkForFilePathErrors } from "./checkForFilePathErrors.js";
import { MandatoryError } from "./MandatoryError.js";
import { FilePathError } from "./FilePathError.js";

class CaesarCipherer {
  constructor(initialUserRequest) {
    this.initialUserCommand = initialUserRequest.slice(2);
    this.parsedUserCommand = getArgsAndStatus(this.initialUserCommand);
    this.inputText = "";
    this.outputText = "";
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

  getInputText() {
    if (this.parsedUserCommand.inputFileName.status === "ok") {
      this.inputText = getTextFromFile(
        this.parsedUserCommand.inputFileName.value
      );
    } else {
      this.inputText = getTextFromUser();
    }
  }

  getOutputText() {}

  sendOutputText() {}
}

const cipher = new CaesarCipherer(process.argv);

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
