import fs from "node:fs";
console.log("First");
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);
console.log("Second");

fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
console.log("Third");

fs.writeFileSync("./greet.txt", "Hello mario greet");

fs.writeFile("./greet.txt", "Async Mario hello", { flag: "append" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Sucessfully written content");
  }
});
