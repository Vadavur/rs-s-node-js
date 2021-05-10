function MandatoryError(mandatoryArgsErrors) {
  this.name = "PropertyError";

  this.errors = mandatoryArgsErrors;
  this.message = mandatoryArgsErrors.forEach((errora) => {
    console.log(errora);
  });

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, MandatoryError);
  } else {
    this.stack = new Error().stack;
  }
}


export {MandatoryError}