let myMap = new Map();
 
// Adding keys
console.time("map-add");
for (let i = 0; i < 100000; i++) {
   myMap.set(i, "value");
}
console.timeEnd("map-add");
 
// Removing keys
console.time("map-remove");
for (let i = 0; i < 100000; i++) {
   myMap.delete(i);
}
console.timeEnd("map-remove");