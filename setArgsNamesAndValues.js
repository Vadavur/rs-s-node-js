const setArgsNamesAndValues = (
  parsedUserArgsNamesAndValues,
  initialUserRequest
) => {
  const argsTemplates = {
    action: {
      argName: new RegExp("^-a$|^--action$"),
      argValue: new RegExp("^encode$|^decode$"),
    },
    shift: {
      argName: new RegExp("^-s$|^--shift$"),
      argValue: new RegExp("^-\\d+$|^\\d+$"),
    },
    input: {
      argName: new RegExp("^-i$|^--input$"),
      argValue: new RegExp("^.+$"),
    },
    output: {
      argName: new RegExp("^-o$|^--output$"),
      argValue: new RegExp("^.+$"),
    },
  };

  initialUserRequest.forEach((currentValue, index) => {
    const nextValue = initialUserRequest[index + 1];
    for (let arg in argsTemplates) {
      const argTemplate = argsTemplates[arg];
      if (currentValue.match(argTemplate["argName"]) && !isArgName(nextValue)) {
        const currentArg = parsedUserArgsNamesAndValues[arg];
        currentArg["argName"]["value"] = currentValue;
        currentArg["argName"]["status"] = "ok";
        currentArg["argValue"]["value"] = nextValue;
        if (nextValue.match(argTemplate["argValue"])) {
          currentArg["argValue"]["status"] = "ok";
        } else
          currentArg["argValue"][
            "status"
          ] += ` Current value is '${nextValue}'.`;
      }
    }
  });

  function isArgName(value) {
    for (let arg in argsTemplates) {
      if (value.match(argsTemplates[arg]["argName"])) {
        return true;
      }
    }
    return false;
  }
};

export { setArgsNamesAndValues };
