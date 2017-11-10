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

function prependDriver(name) {
  const newDrivers = [name, ...drivers];
}
// function appendDriver(name) {
//   const newNewDrivers = [ name, ...drivers ];
// }
