const setMandatoryArgsStatus = (parsedUserArgsAndStatus) => {
  const mandatoryArgsTemplatesAndErrors = {
    actionArg: {
      regexp: new RegExp("^-a$|^--action$"),
      errorStatus:
        "Error: wrong, missing or misplaced action command - should be '-a' or '--action'.",
    },
    actionName: {
      regexp: new RegExp("^encode$|^decode$"),
      errorStatus:
        "Error: wrong, missing or misplaced action name - should be 'encode' or 'decode'.",
    },
    shiftArg: {
      regexp: new RegExp("^-s$|^-`-shift$"),
      errorStatus:
        "Error: wrong, missing or misplaced shift command - should be '-s' or '--shift'.",
    },
    shiftValue: {
      regexp: new RegExp("^-\\d+$|^\\d+$"),
      errorStatus: "Error: wrong, missing or misplaced shift value - should be an integer number.",
    },
  };

  for (let key in mandatoryArgsTemplatesAndErrors) {
    if (
      !parsedUserArgsAndStatus[key]["arg"].match(
        mandatoryArgsTemplatesAndErrors[key]["regexp"]
      )
    ) {
      parsedUserArgsAndStatus[key]["status"] =
        mandatoryArgsTemplatesAndErrors[key]["errorStatus"];
    }
  }
};

export { setMandatoryArgsStatus };
