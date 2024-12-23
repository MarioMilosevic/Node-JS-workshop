// MODULES
const { john, peter } = require("./4-firstModules");
const sayHi = require("./5-utils");
require("./7-mind-grenade");

sayHi("Mario");
sayHi(john);
sayHi(peter);
