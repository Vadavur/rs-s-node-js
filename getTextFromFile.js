import { readFileSync } from "fs";

function getTextFromFile(inputFileName) {
  return readFileSync(inputFileName, "utf8");
}

export { getTextFromFile };
