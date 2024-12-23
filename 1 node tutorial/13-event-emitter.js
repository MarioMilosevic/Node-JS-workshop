const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`Data received ${name} ${id}`);
});

customEmitter.on("response", () => {
  console.log(`something different`);
});

customEmitter.emit("response", "mario", 28);
