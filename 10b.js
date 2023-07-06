const mymap=new Map([
    ["name","jhon"],
    ["age","13"]
]);

console.log("Name",mymap.get("name"));
console.log("Age",mymap.get("age"));

for(const [key,value] of mymap){
    console.log(key,value);
}