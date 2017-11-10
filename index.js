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

const appendDriver(name) {
  const newDrivers = [...drivers, name];
}
// function prependDriver(name) {
//   const newNewDrivers = [ name, ...drivers ];
// }
