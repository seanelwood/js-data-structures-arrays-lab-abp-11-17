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

function appendDriver() {
//const newDrivers = [...drivers, name];
}
function prependDriver() {
//const newNewDrivers = [ name, ...drivers ];
}

function removeLastDriver() {
 return drivers.slice();
}
function removeFirstDriver() {

}
