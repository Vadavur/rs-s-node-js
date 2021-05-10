import { MandatoryError } from "./MandatoryError.js";

const checkForMandatoryArgsErrors = (parsedUserCommand) => {
  const mandatoryArgsErrors = [];
  const mandatoryKeys = Object.keys(parsedUserCommand).slice(0, 4);
  mandatoryKeys.forEach((key) => {
    if (parsedUserCommand[key]["status"] !== "ok") {
      const errorMessage = `${parsedUserCommand[key]["status"]} Current value is '${parsedUserCommand[key]["value"]}'.`;
      mandatoryArgsErrors.push(errorMessage);
    }
  });

  if (mandatoryArgsErrors.length !== 0) {
    MandatoryError.prototype = Object.create(Error.prototype);
    throw new MandatoryError(mandatoryArgsErrors);
  }
};

export { checkForMandatoryArgsErrors };
