import { setMandatoryArgsStatus } from "./setMandatoryArgsStatus.js";
import { setInputOutputArgsAndStatus } from "./setInputOutputArgsAndStatus.js";

const getArgsAndStatus = (initialUserCommand) => {
  const parsedUserArgsAndStatus = {
    actionArg: {value: initialUserCommand[0], status: "ok" },
    actionName: {value: initialUserCommand[1], status: "ok" },
    shiftArg: {value: initialUserCommand[2], status: "ok" },
    shiftValue: {value: initialUserCommand[3], status: "ok" },
    inputArg: {value: "", status: "none" },
    inputFileName: {value: "", status: "none" },
    outputArg: {value: "", status: "none" },
    outputFileName: {value: "", status: "none" },
  };

  setMandatoryArgsStatus(parsedUserArgsAndStatus);

  const notMandatoryUserArgs = initialUserCommand.slice(4);

  if (notMandatoryUserArgs.length > 0){
    setInputOutputArgsAndStatus(parsedUserArgsAndStatus, notMandatoryUserArgs);
  }

  return parsedUserArgsAndStatus;
};

export { getArgsAndStatus };
