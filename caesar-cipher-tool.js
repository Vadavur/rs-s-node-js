import { getArgsNamesAndValues } from "./getArgsNamesAndValues.js";
import { checkForMandatoryArgsErrors } from "./checkForMandatoryArgsErrors.js";
import { checkForFilePathErrors } from "./checkForFilePathErrors.js";
import { MandatoryError } from "./MandatoryError.js";
import { FilePathError } from "./FilePathError.js";
import { getTextFromFile } from "./getTextFromFile.js";
import { getTextFromUser } from "./getTextFromUser.js";

class CaesarCipherer {
  constructor(initialUserCommand) {
    this.initialUserRequest = initialUserCommand.slice(2);
    this.parsedUserRequest = getArgsNamesAndValues(this.initialUserRequest);
    this.inputText = "";
    this.outputText = "";
  }

  checkForErrors() {
    try {
      checkForMandatoryArgsErrors(this.parsedUserRequest);
      checkForFilePathErrors(this.parsedUserRequest);
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
    
    if (this.parsedUserRequest.input.argValue.status === "ok") {
      this.inputText = getTextFromFile(
        this.parsedUserRequest.input.argValue.value,
        this.inputText
      );
    } else {
      this.inputText = getTextFromUser(this.parsedUserRequest.action.argValue.value);
    }
  }

  makeCipherMagic() {}

  sendOutputText() {}
}

const cipher = new CaesarCipherer(process.argv);

cipher.checkForErrors();

cipher.getInputText();


// const inputText = getInputText(parsedUserRequest);

// const outputText = getOutputText(parsedUserRequest);

// console.log(parsedUserRequest);

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// readline.question(`What's your name?`, name => {
//   console.log(`Hi ${name}!`)
//   readline.close()
// })
