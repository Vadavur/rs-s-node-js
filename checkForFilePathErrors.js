import { FilePathError } from "./FilePathError.js";
import { promises } from "fs";
import { constants } from "fs";

async function checkForFilePathErrors(parsedUserRequest) {
  const filePathErrors = [];
  const filePathArgs = Object.keys(parsedUserRequest).slice(2, 4);
  const actionCheck = { input: constants.R_OK, output: constants.W_OK };

  for (let i = 0; i < filePathArgs.length; i++) {
    const arg = filePathArgs[i];
    const filePath = parsedUserRequest[arg]["argValue"];
    if (filePath.status === "ok") {
      try {
        await promises.access(filePath.value, actionCheck[arg]);
      } catch {
        filePathErrors.push(
          `Error: the ${arg} file ${filePath.value} is not accessible!`
        );
      }
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
