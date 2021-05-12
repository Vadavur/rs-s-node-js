function getCipherizedText(text, action, shift) {
  let cipherizedText = "";
  const proceededShift =
    shift >= 0
      ? action === "encode"
        ? shift
        : -1 * shift
      : action === "encode"
      ? shift
      : -1 * shift;

  const alphabetLength = 26;
  const textLength = text.length;

  for (let i = 0; i < textLength; i++) {
    const textCharCode = text.charCodeAt(i);
    let addedCharCode = "";
    if (textCharCode >= 65 && textCharCode <= 90) {
      addedCharCode =
        ((textCharCode + proceededShift - 65) % alphabetLength) + 65;
      addedCharCode += addedCharCode < 65 ? 26 : 0;
      cipherizedText += String.fromCharCode(addedCharCode);
    } else if (textCharCode >= 97 && textCharCode <= 122) {
      addedCharCode =
        ((textCharCode + proceededShift - 97) % alphabetLength) + 97;
      addedCharCode += addedCharCode < 97 ? 26 : 0;
      cipherizedText += String.fromCharCode(addedCharCode);
    } else {
      cipherizedText += text[i];
    }
  }

  return cipherizedText;
}

export { getCipherizedText };