const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}
 function destructivelyPrependDriver(name) {
   drivers.unshift(name);
 }

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const drivers = ["Milo", "Otis", "Garfield"];
  const newDrivers = [...drivers, name];
}
// function prependDriver(name) {
//   const newNewDrivers = [ name, ...drivers ];
// }
