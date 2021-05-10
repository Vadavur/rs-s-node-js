const setInputOutputArgsAndStatus = (
  parsedUserArgsAndStatus,
  notMandatoryUserArgs
) => {
  const inputOutputArgsTemplates = {
    inputArg: new RegExp("^-i$|^--input$"),
    inputFileName: new RegExp("^.+$"),
    outputArg: new RegExp("^-o$|^--output$"),
    outputFileName: new RegExp("^.+$"),
  };

  // here we show the lack of creativity at 5:47 am
  // so we use the multi-if-else cascads to find out
  // if there are any input/output-fileName paired args in the right places
  // and put them in the parsedUserArgsAndStatus if there are

  if (
    notMandatoryUserArgs[2].match(
      inputOutputArgsTemplates.outputArg
    )
  ) {
    parsedUserArgsAndStatus.outputArg.arg =
      notMandatoryUserArgs[2];
    parsedUserArgsAndStatus.outputFileName.arg =
      notMandatoryUserArgs[3] || "";
    if (
      notMandatoryUserArgs[0].match(
        inputOutputArgsTemplates.inputArg
      )
    ) {
      parsedUserArgsAndStatus.inputArg.arg =
        notMandatoryUserArgs[0];
      parsedUserArgsAndStatus.inputFileName.arg =
        notMandatoryUserArgs[1] || "";
    }
  } else {
    if (
      notMandatoryUserArgs[1].match(
        inputOutputArgsTemplates.outputArg
      )
    ) {
      parsedUserArgsAndStatus.outputArg.arg =
        notMandatoryUserArgs[1];
      parsedUserArgsAndStatus.outputFileName.arg =
        notMandatoryUserArgs[2] || "";
    } else {
      if (
        notMandatoryUserArgs[0].match(
          inputOutputArgsTemplates.outputArg
        )
      ) {
        parsedUserArgsAndStatus.outputArg.arg =
          notMandatoryUserArgs[0];
        parsedUserArgsAndStatus.outputFileName.arg =
          notMandatoryUserArgs[1] || "";
      } else {
        if (
          notMandatoryUserArgs[0].match(
            inputOutputArgsTemplates.inputArg
          )
        ) {
          parsedUserArgsAndStatus.inputArg.arg =
            notMandatoryUserArgs[0];
          parsedUserArgsAndStatus.inputFileName.arg =
            notMandatoryUserArgs[1] || "";
        }
      }
    }
  }

  let inputOutputArgsKeys = Object.keys(parsedUserArgsAndStatus).splice(
    4,
    7
  );

  inputOutputArgsKeys.forEach((key) => {
    if (parsedUserArgsAndStatus[key]["arg"]) {
      parsedUserArgsAndStatus[key].status = "ok";
    }
  });
};

export { setInputOutputArgsAndStatus };
