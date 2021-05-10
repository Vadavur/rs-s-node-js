import { setMandatoryArgsStatus } from "./setMandatoryArgsStatus.js";
import { setInputOutputArgsAndStatus } from "./setInputOutputArgsAndStatus.js";

const getArgsAndStatus = (initialUserCommand) => {
  const parsedUserArgsAndStatus = {
    actionArg: { arg: initialUserCommand[0], status: "ok" },
    actionName: { arg: initialUserCommand[1], status: "ok" },
    shiftArg: { arg: initialUserCommand[2], status: "ok" },
    shiftValue: { arg: initialUserCommand[3], status: "ok" },
    inputArg: { arg: "", status: "none" },
    inputFileName: { arg: "", status: "none" },
    outputArg: { arg: "", status: "none" },
    outputFileName: { arg: "", status: "none" },
  };

  setMandatoryArgsStatus(parsedUserArgsAndStatus);

  const notMandatoryUserArgs = initialUserCommand.slice(4);

  if (notMandatoryUserArgs.length > 0){
    setInputOutputArgsAndStatus(parsedUserArgsAndStatus, notMandatoryUserArgs);
  }

  return parsedUserArgsAndStatus;
};

export { getArgsAndStatus };
