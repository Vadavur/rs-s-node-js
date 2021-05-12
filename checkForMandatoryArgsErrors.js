import { MandatoryArgError } from "./MandatoryArgError.js";

const checkForMandatoryArgsErrors = (parsedUserRequest) => {
  const mandatoryArgsErrors = [];

  const mandatoryArgs = Object.keys(parsedUserRequest).slice(0, 2);
  mandatoryArgs.forEach((arg) => {
    if (parsedUserRequest[arg]["argName"]["status"] !== "ok") {
      mandatoryArgsErrors.push(parsedUserRequest[arg]["argName"]["status"]);
    } else if (parsedUserRequest[arg]["argValue"]["status"] !== "ok") {
      mandatoryArgsErrors.push(parsedUserRequest[arg]["argValue"]["status"]);
    }
  });

  if (mandatoryArgsErrors.length !== 0) {
    MandatoryArgError.prototype = Object.create(Error.prototype);
    throw new MandatoryArgError(mandatoryArgsErrors);
  }
};

export { checkForMandatoryArgsErrors };
