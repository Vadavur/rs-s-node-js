const fs = require('fs');
const file = fs.createWriteStream('./input.txt');

for(let i=0; i<= 20; i++) {
  file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
}

file.end();



// const Stream = require("stream");

// const readableStream = new Stream.Readable({
//   read() {},
// });
// const writableStream = new Stream.Writable();

// writableStream._write = (chunk, encoding, next) => {
//   console.log(chunk.toString());
//   next();
// };

// readableStream.pipe(writableStream);

// readableStream.push("hi!");
// readableStream.push("ho!");

//----------------------------------

// fs.readFile("./input.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

//-----------------------------------

// const fs = require("fs");

// const content = "Some content!";

// fs.writeFile('./output.txt', "bangabanja", {flag: "a+"}, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
// });
