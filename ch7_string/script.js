let age = 25;
let password = "london123!=@";

// =====================================================
// BASIC STRING PROPERTIES
// =====================================================

// 1. length
console.log(password.length);
// 11

// =====================================================
// CHARACTER ACCESS
// =====================================================

// 2. charAt()
console.log(password.charAt(0));
// l

console.log(password.charAt(5));
// n

// 3. at() - supports negative indexes
console.log(password.at(-1));
// @

// 4. Bracket notation
console.log(password[0]);
// l

console.log(password[10]);
// @

// =====================================================
// SEARCHING METHODS
// =====================================================

// 5. indexOf()
console.log(password.indexOf("="));
// 9

// 6. lastIndexOf()
console.log(password.lastIndexOf("o"));
// 4

// 7. includes()
console.log(password.includes("123"));
// true

// 8. startsWith()
console.log(password.startsWith("lon"));
// true

// 9. endsWith()
console.log(password.endsWith("@"));
// true

// 10. search()
console.log(password.search(/[0-9]/));
// 6

// =====================================================
// EXTRACTING PARTS OF A STRING
// =====================================================

// 11. slice(start, end)
console.log(password.slice(0, 6));
// london

// Negative index
console.log(password.slice(-3));
// !=@

// 12. substring(start, end)
console.log(password.substring(0, 6));
// london

// 13. substr(start, length) - Deprecated
console.log(password.substr(6, 3));
// 123

// =====================================================
// CASE CONVERSION
// =====================================================

// 14. toUpperCase()
console.log(password.toUpperCase());
// LONDON123!=@

// 15. toLowerCase()
console.log(password.toLowerCase());
// london123!=@

// =====================================================
// TRIMMING
// =====================================================

let passwordWithSpaces = "   london123!=@   ";

// 16. trim()
console.log(passwordWithSpaces.trim());
// london123!=@

// 17. trimStart()
console.log(passwordWithSpaces.trimStart());
// london123!=@

// 18. trimEnd()
console.log(passwordWithSpaces.trimEnd());
//    london123!=@

// =====================================================
// REPLACING
// =====================================================

// 19. replace()
console.log(password.replace("london", "paris"));
// paris123!=@

// 20. replaceAll()
console.log(password.replaceAll("o", "0"));
// l0nd0n123!=@

// =====================================================
// SPLITTING
// =====================================================

// 21. split()
console.log(password.split(""));
// [
//   'l', 'o', 'n', 'd', 'o',
//   'n', '1', '2', '3', '!',
//   '=', '@'
// ]

console.log(password.split("123"));
// ['london', '!=@']

// =====================================================
// CONCATENATION
// =====================================================

// 22. concat()
console.log(password.concat("ABC"));
// london123!=@ABC

// =====================================================
// REPEATING
// =====================================================

// 23. repeat()
console.log(password.repeat(2));
// london123!=@london123!=@

// =====================================================
// PADDING
// =====================================================

// 24. padStart()
console.log(password.padStart(15, "*"));
// ****london123!=@

// 25. padEnd()
console.log(password.padEnd(15, "*"));
// london123!=@****

// =====================================================
// CHARACTER CODE METHODS
// =====================================================

// 26. charCodeAt()
console.log(password.charCodeAt(0));
// 108

// 27. codePointAt()
console.log(password.codePointAt(0));
// 108

// =====================================================
// REGULAR EXPRESSION METHODS
// =====================================================

// 28. match()
console.log(password.match(/[0-9]/g));
// ['1', '2', '3']

// 29. matchAll()
console.log([...password.matchAll(/[0-9]/g)]);
// [
//   ['1', index: 6, ...],
//   ['2', index: 7, ...],
//   ['3', index: 8, ...]
// ]

// =====================================================
// LOCALE METHODS
// =====================================================

// 30. localeCompare()
console.log(password.localeCompare("zebra"));
// -1

// 31. toLocaleUpperCase()
console.log(password.toLocaleUpperCase());
// LONDON123!=@

// 32. toLocaleLowerCase()
console.log(password.toLocaleLowerCase());
// london123!=@

// =====================================================
// STRING CONVERSION
// =====================================================

// 33. toString()
console.log(password.toString());
// london123!=@

// 34. valueOf()
console.log(password.valueOf());
// london123!=@

// =====================================================
// STATIC STRING METHODS
// =====================================================

// 35. String.fromCharCode()
console.log(String.fromCharCode(108, 111, 110));
// lon

// 36. String.fromCodePoint()
console.log(String.fromCodePoint(108, 111, 110));
// lon

// 37. String.raw()
console.log(String.raw`Password: ${password}\nAge: ${age}`);
// Password: london123!=@\nAge: 25

// =====================================================
// TEMPLATE LITERALS
// =====================================================

let sentence = `Password is ${password} and age is ${age}`;

console.log(sentence);
// Password is london123!=@ and age is 25
