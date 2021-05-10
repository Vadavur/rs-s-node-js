import { setArgsNamesAndValues } from "./setArgsNamesAndValues.js";

const getArgsNamesAndValues = (initialUserRequest) => {
  const parsedUserArgsNamesAndValues = {
    action: {
      argName: {
        value: "",
        status:
          "Error: wrong or missing action command - should be '-a' or '--action'.",
      },
      argValue: {
        value: "",
        status: "Error: wrong action name - should be 'encode' or 'decode'.",
      },
    },
    shift: {
      argName: {
        value: "",
        status:
          "Error: wrong or missing shift command - should be '-s' or '--shift'.",
      },
      argValue: {
        value: "",
        status: "Error: wrong shift value - should be an integer number.",
      },
    },
    input: {
      argName: { value: "", status: "none" },
      argValue: { value: "", status: "none" },
    },
    output: {
      argName: { value: "", status: "none" },
      argValue: { value: "", status: "none" },
    },
  };

  setArgsNamesAndValues(parsedUserArgsNamesAndValues, initialUserRequest);
  return parsedUserArgsNamesAndValues;
};

export { getArgsNamesAndValues };
