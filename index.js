setTimeout(() => {
  console.log("this is setTimeout 1");
}, 1000);
setTimeout(() => {
  console.log("this is setTimeout 2");
}, 500);
setTimeout(() => {
  console.log("this is setTimeout 3");
}, 0); 
// import crypto from "node:crypto";

// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// console.log("Hash", Date.now() - start);

// // import { createServer } from "node:http";
// // import fs from "node:fs";

// // const server = createServer((req, res) => {
// //   res.writeHead(200, { "Content-Type": "text/html" });
// //   fs.createReadStream("./index.html").pipe(res)
// //   // const html = fs.readFileSync("./index.html", "utf-8");
// //   // res.end(html);
// // });

// // server.listen(3000, () => {
// //   console.log("Server running on port 3000");
// // });
