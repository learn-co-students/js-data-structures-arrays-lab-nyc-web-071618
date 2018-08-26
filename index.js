// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];


function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
    drivers.pop(name)
}
function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name)
}

function appendDriver(name) {
  return  drivers.concat(name)
}
function prependDriver(name) {
  const names = [name]
  return  names.concat(drivers)
}
function removeLastDriver(name) {
  return  drivers.slice(0, -1);
}
function removeFirstDriver(name) {
  return   drivers.slice(1);
}
