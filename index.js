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

// function appendDriver() {
// //const newDrivers = [...drivers, name];
// }
// function prependDriver() {
// //const newNewDrivers = [ name, ...drivers ];
// }

// function removeLastDriver() {
//   drivers.slice(0, drivers.length -1);
// }
function removeFirstDriver() {
  const drivers.slice(1);
}
