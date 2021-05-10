import { readFileSync } from "fs";

function getTextFromFile(inputFileName) {
  return readFileSync(inputFileName, "utf8");
}

export { getTextFromFile };

// import { readFile } from "fs";
// // import { createReadStream } from "fs";

// async function getTextFromFile(inputFileName) {
//   let datata = '';
//   await readFile("./input.txt", "utf8", function (err, data) {
//     if (err) {
//       return console.log(err);
//     }
//     datata = data;
//   });
//   setTimeout(() => {
//     return datata
//   }, 1000);
// }

// console.log(getTextFromFile())

// function getTextFromFile(inputFileName) {
//   function ggetTextFromFile(inputFileName) {
//     return new Promise(function (resolve, reject) {
//       let data = "";
//       let readStream = createReadStream(inputFileName, "utf8");
//       readStream
//         .on("data", (chunk) => {
//           data += chunk;
//         })
//         .on("end", () => {
//           console.log(data);
//         }) = () => resolve(data);
//       return data;
//     });

//   }

// let promise = ggetTextFromFile(inputFileName)

// promise.then(data => data)
// }

// export { getTextFromFile };

// import { createReadStream } from "fs";

// function getTextFromFile(inputFileName, inputTextInst) {
//   let data = "";

//   let readStream = createReadStream(inputFileName, "utf8");

//   readStream
//     .on("data", function (chunk) {
//       data += chunk;
//     })
//     .on("end", () => {
//       console.log (data);
//     });
// }

// export { getTextFromFile };

// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res) {
//   // The filename is simple the local directory and tacks on the requested url
//   var filename = __dirname+req.url;

//   // This line opens the file as a readable stream
//   var readStream = fs.createReadStream(filename);

//   // This will wait until we know the readable stream is actually valid before piping
//   readStream.on('open', function () {
//     // This just pipes the read stream to the response object (which goes to the client)
//     readStream.pipe(res);
//   });

//   // This catches any errors that happen while creating the readable stream (usually invalid names)
//   readStream.on('error', function(err) {
//     res.end(err);
//   });
// }).listen(8080);

// const fs = require('fs');
// const file = fs.createWriteStream('./input.txt');

// for(let i=0; i<= 20; i++) {
//   file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
// }

// file.end();

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
// function getTextFromFile(inputFileName) {

//  return readFile(inputFileName, "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     return data;
//   });
// }

// export {getTextFromFile}

//-----------------------------------

// const fs = require("fs");

// const content = "Some content!";

// fs.writeFile('./output.txt', "bangabanja", {flag: "a+"}, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
// });
