// let students = ["Alice", "Bob", "Charlie", "David", "Eve"];
// console.log(students[1]);

// let[ s, x, f,d,e] = students;
// console.log(s);
// console.log(x);
// console.log(f);
// console.log(d);
// console.log(e);

let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name);
console.log(person["name"]);


let { name, age, city } = person;
console.log(name)
console.log(age);
console.log(city);