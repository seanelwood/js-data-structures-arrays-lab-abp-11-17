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
//MY ISSUE, why do the following four require "return"??

function appendDriver(name) {
return [...drivers, name];
}
// function prependDriver() {
// //const newNewDrivers = [ name, ...drivers ];
// }

function removeLastDriver() {
  return drivers.slice(0, drivers.length -1);
}

function removeFirstDriver() {
   return drivers.slice(1);
}
