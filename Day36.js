const obj = { name: "Kodyfier Thapa", age: 30, city: "Pune" };

let entries = Object.entries(obj)
console.log(entries);
console.log(entries.flat());

let newObject = Object.fromEntries(entries);
console.log(newObject)
