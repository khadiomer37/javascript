let person1 = {
    FirstName: "khadija",
    LastName: "abdulle",
    age: 20,
    town: "London"
};
let person2 = {
    FirstName: "Lola",
    LastName: "mursal",
    age: 19,
    town: "Birmingham"
};

// console.log(person1)
console.log(person2.LastName)
console.log(person2.town)

console.log(person1["town"]);
 for (let key in person1) {
    console.log(key + " : " + person1[key]);
}