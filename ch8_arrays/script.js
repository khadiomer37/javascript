let fruits = ["apple", "banana", "orange"];

// =====================================================
// BASIC ARRAY ACCESS
// =====================================================

// 1. length
console.log(fruits.length);
// 3

// 2. Access by index
console.log(fruits[0]);
// apple

console.log(fruits[2]);
// orange

// 3. at() - supports negative indexes
console.log(fruits.at(1));
// banana

console.log(fruits.at(-1));
// orange

// =====================================================
// ADDING ELEMENTS
// =====================================================

// 4. push() - add to end
fruits.push("mango");
console.log(fruits);
// ["apple", "banana", "orange", "mango"]

// 5. unshift() - add to beginning
fruits.unshift("grape");
console.log(fruits);
// ["grape", "apple", "banana", "orange"]

// =====================================================
// REMOVING ELEMENTS
// =====================================================

let fruits2 = ["apple", "banana", "orange"];

// 6. pop() - remove last element
console.log(fruits2.pop());
// orange

console.log(fruits2);
// ["apple", "banana"]

// 7. shift() - remove first element
console.log(fruits2.shift());
// apple

console.log(fruits2);
// ["banana"]

// =====================================================
// SEARCHING
// =====================================================

let fruits3 = ["apple", "banana", "orange"];

// 8. indexOf()
console.log(fruits3.indexOf("banana"));
// 1

// 9. lastIndexOf()
console.log(fruits3.lastIndexOf("banana"));
// 1

// 10. includes()
console.log(fruits3.includes("orange"));
// true

console.log(fruits3.includes("mango"));
// false

// 11. find()
console.log(fruits3.find((fruit) => fruit.length > 5));
// banana

// 12. findIndex()
console.log(fruits3.findIndex((fruit) => fruit === "orange"));
// 2

// 13. findLast()
console.log(fruits3.findLast((fruit) => fruit.length > 5));
// orange

// 14. findLastIndex()
console.log(fruits3.findLastIndex((fruit) => fruit.length > 5));
// 2

// =====================================================
// JOINING AND CONVERTING
// =====================================================

// 15. join()
console.log(fruits.join(", "));
// apple, banana, orange

// 16. toString()
console.log(fruits.toString());
// apple,banana,orange

// =====================================================
// COMBINING ARRAYS
// =====================================================

// 17. concat()
let moreFruits = ["mango", "grape"];

console.log(fruits.concat(moreFruits));
// ["apple", "banana", "orange", "mango", "grape"]

// =====================================================
// EXTRACTING ELEMENTS
// =====================================================

// 18. slice() - does NOT change original array
console.log(fruits.slice(0, 2));
// ["apple", "banana"]

console.log(fruits.slice(1));
// ["banana", "orange"]

// =====================================================
// ADDING/REMOVING AT ANY POSITION
// =====================================================

let fruits4 = ["apple", "banana", "orange"];

// 19. splice() - changes original array
fruits4.splice(1, 1);
console.log(fruits4);
// ["apple", "orange"]

// Add element using splice
let fruits5 = ["apple", "banana", "orange"];

fruits5.splice(1, 0, "mango");
console.log(fruits5);
// ["apple", "mango", "banana", "orange"]

// =====================================================
// NEW IMMUTABLE ARRAY METHODS
// =====================================================

// 20. toSpliced() - like splice but does NOT change original
console.log(fruits.toSpliced(1, 1));
// ["apple", "orange"]

console.log(fruits);
// ["apple", "banana", "orange"]

// =====================================================
// SORTING AND REVERSING
// =====================================================

// 21. sort() - changes original array
let fruits6 = ["orange", "apple", "banana"];

fruits6.sort();
console.log(fruits6);
// ["apple", "banana", "orange"]

// 22. reverse() - changes original array
let fruits7 = ["apple", "banana", "orange"];

fruits7.reverse();
console.log(fruits7);
// ["orange", "banana", "apple"]

// 23. toSorted() - does NOT change original
console.log(fruits.toSorted());
// ["apple", "banana", "orange"]

// 24. toReversed() - does NOT change original
console.log(fruits.toReversed());
// ["orange", "banana", "apple"]

// =====================================================
// LOOPING METHODS
// =====================================================

// 25. forEach()
fruits.forEach((fruit) => {
  console.log(fruit);
});
// apple
// banana
// orange

// 26. map() - creates new array
console.log(fruits.map((fruit) => fruit.toUpperCase()));
// ["APPLE", "BANANA", "ORANGE"]

// 27. filter() - filters elements
console.log(fruits.filter((fruit) => fruit.length > 5));
// ["banana", "orange"]

// 28. reduce() - reduces array to one value
console.log(fruits.reduce((total, fruit) => total + fruit.length, 0));
// 17

// 29. reduceRight()
console.log(fruits.reduceRight((result, fruit) => result + fruit, ""));
// orangebananaapple

// 30. every()
console.log(fruits.every((fruit) => fruit.length > 3));
// true

// 31. some()
console.log(fruits.some((fruit) => fruit === "banana"));
// true

// =====================================================
// ITERATORS
// =====================================================

// 32. keys()
console.log([...fruits.keys()]);
// [0, 1, 2]

// 33. values()
console.log([...fruits.values()]);
// ["apple", "banana", "orange"]

// 34. entries()
console.log([...fruits.entries()]);
// [
//   [0, "apple"],
//   [1, "banana"],
//   [2, "orange"]
// ]

// =====================================================
// CHECKING ARRAY TYPE
// =====================================================

// 35. Array.isArray()
console.log(Array.isArray(fruits));
// true

// =====================================================
// FILLING
// =====================================================

let numbers = [1, 2, 3];

// 36. fill()
console.log(numbers.fill(0));
// [0, 0, 0]

// =====================================================
// COPY METHODS
// =====================================================

// 37. copyWithin()
let letters = ["a", "b", "c", "d"];

console.log(letters.copyWithin(1, 2));
// ["a", "c", "d", "d"]

// =====================================================
// FLAT
// =====================================================

let nestedArray = [
  ["apple", "banana"],
  ["orange", "mango"],
];

// 38. flat()
console.log(nestedArray.flat());
// ["apple", "banana", "orange", "mango"]

// 39. flatMap()
console.log(fruits.flatMap((fruit) => [fruit, fruit.toUpperCase()]));
// [
//   "apple", "APPLE",
//   "banana", "BANANA",
//   "orange", "ORANGE"
// ]

// =====================================================
// ARRAY DESTRUCTURING
// =====================================================

let [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);
// apple

console.log(secondFruit);
// banana

console.log(thirdFruit);
// orange

// =====================================================
// SPREAD OPERATOR
// =====================================================

// Copy array
let copiedFruits = [...fruits];

console.log(copiedFruits);
// ["apple", "banana", "orange"]

// Add new item while copying
let newFruits = [...fruits, "mango"];

console.log(newFruits);
// ["apple", "banana", "orange", "mango"]
