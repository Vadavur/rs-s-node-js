import { FilePathError } from "./FilePathError.js";
import { promises } from "fs";
import { constants } from "fs";

async function checkForFilePathErrors(parsedUserCommand) {
  const filePathErrors = [];
  const inputFilePath = parsedUserCommand.inputFileName;
  const outputFilePath = parsedUserCommand.outputFileName;

  if (inputFilePath.status === "ok") {
    try {
      await promises.access(inputFilePath.value, constants.R_OK);
    } catch {
      filePathErrors.push(
        `Error: the input file ${inputFilePath.value} is not accessible!`
      );
    }
  }

  if (outputFilePath.status === "ok") {
    try {
      await promises.access(outputFilePath.value, constants.R_OK);
    } catch {
      filePathErrors.push(
        `Error: the output file ${outputFilePath.value} is not accessible!`
      );
    }
  }

  try {
    if (filePathErrors.length !== 0) {
      FilePathError.prototype = Object.create(Error.prototype);
      throw new FilePathError(filePathErrors);
    }
  } catch (error) {}
}

export { checkForFilePathErrors };
