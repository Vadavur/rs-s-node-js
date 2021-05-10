function FilePathError(filePathErrors) {
  this.name = "FilePathError";

  this.errors = filePathErrors;
  this.message = filePathErrors.forEach((errora) => {
    console.log(errora);
  });

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, FilePathError);
  } else {
    this.stack = new Error().stack;
  }
}

export { FilePathError };
