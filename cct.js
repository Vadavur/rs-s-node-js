import CaesarCipherer from "./CaesarCipherer.js";
import { MandatoryArgError } from "./MandatoryArgError.js";
import { FilePathError } from "./FilePathError.js";

function proceedCiphering() {
  const cipher = new CaesarCipherer(process.argv);

  try {
    cipher.checkForErrors();
  } catch (error) {
    if (error instanceof MandatoryArgError) {
      error.message;
      return;
    }
    if (error instanceof FilePathError) {
      error.message;
      return;
    }
  }

  cipher
    .getInputText()
    .then((result) => cipher.makeCipherMagic())
    .then((result) => cipher.writeOutputText());
  return;
}

proceedCiphering();
