async function writeTextToUser(outputText, action) {
  console.log(
    `No input file was set!\nYour ${action}d text is:\n${outputText}`
  );
}

export { writeTextToUser };
