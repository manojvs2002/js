let myObj = {};
 
// Adding keys
console.time("object-add");
for (let i = 0; i < 100000; i++) {
   myObj[i] = "value";
}
console.timeEnd("object-add");
 
// Removing keys
console.time("object-remove");
for (let i = 0; i < 100000; i++) {
   delete myObj[i];
}
console.timeEnd("object-remove");

