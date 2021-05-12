import { getArgsNamesAndValues } from "./getArgsNamesAndValues.js";
import { checkForMandatoryArgsErrors } from "./checkForMandatoryArgsErrors.js";
import { checkForFilePathErrors } from "./checkForFilePathErrors.js";

import { getTextFromFile } from "./getTextFromFile.js";
import { getTextFromUser } from "./getTextFromUser.js";
import { writeTextToFile } from "./writeTextToFile.js";
import { writeTextToUser } from "./writeTextToUser.js";

export default class CaesarCipherer {
  constructor(initialUserCommand) {
    this.initialUserRequest = initialUserCommand.slice(2);
    this.parsedUserRequest = getArgsNamesAndValues(this.initialUserRequest);
    this.inputText = "";
    this.outputText = "";
  }

  checkForErrors() {
    checkForMandatoryArgsErrors(this.parsedUserRequest);
    checkForFilePathErrors(this.parsedUserRequest);
  }

  async getInputText() {
    if (this.parsedUserRequest.input.argValue.status === "ok") {
      this.inputText = getTextFromFile(
        this.parsedUserRequest.input.argValue.value,
        this.inputText
      );
    } else {
      await getTextFromUser(
        this.parsedUserRequest.action.argValue.value,
        this.inputText
      ).then((result) => {
        this.inputText = result;
      });
    }
  }

  makeCipherMagic() {
    const text = this.inputText;
    const action = this.parsedUserRequest.action.argValue.value;
    const shift = this.parsedUserRequest.shift.argValue.value;
    this.outputText = text + "LAST";
  }

  async writeOutputText() {
    if (this.parsedUserRequest.output.argValue.status === "ok") {
      await writeTextToFile(
        this.parsedUserRequest.output.argValue.value,
        this.outputText
      ).then((result) => {
        console.log(
          `Check your file "${this.parsedUserRequest.output.argValue.value}" to see the ${this.parsedUserRequest.action.argValue.value}d text!`
        );
      });
    } else {
      await writeTextToUser(
        this.outputText,
        this.parsedUserRequest.action.argValue.value
      );
    }
  }
}

