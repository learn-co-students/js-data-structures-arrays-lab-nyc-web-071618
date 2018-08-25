// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

const destructivelyAppendDriver = (name) =>{
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
  drivers.unshift('Bob');
}

const destructivelyRemoveLastDriver = () =>{
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

const appendDriver = (name) =>{
  return [...drivers, name];
}

const prependDriver = (name) =>{
  return [name, ...drivers,];
}

const removeLastDriver = () =>{
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver() {
  return drivers.slice(1)
}
