import { createWriteStream } from "fs";

async function writeTextToFile(outputFileName, outputText) {
  const file = createWriteStream(outputFileName, {
    flags: "a"
  });

  file.write(`${outputText}\n`);
  file.end();
}

export { writeTextToFile };
