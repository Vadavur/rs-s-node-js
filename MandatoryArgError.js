function MandatoryArgError(mandatoryArgsErrors) {
  this.name = "MandatoryError";

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

export { MandatoryArgError };
