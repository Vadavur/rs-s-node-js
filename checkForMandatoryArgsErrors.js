import { MandatoryError } from "./MandatoryError.js";

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
    MandatoryError.prototype = Object.create(Error.prototype);
    throw new MandatoryError(mandatoryArgsErrors);
  }
};

export { checkForMandatoryArgsErrors };
