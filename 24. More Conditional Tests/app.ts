// Equality with strings
console.log("Testing with strings:");
console.log("car" == "car");
console.log("car".toLowerCase() === "CAR".toLowerCase());

// Using the lower case function
 // Using the lower case function
console.log("Testing with lower case:");
console.log("CAR".toLowerCase() == "car");


// Numerical tests
console.log("Numerical tests:");
console.log(16 > 8);
console.log(5 < 1);

// Tests using "and" and "or" operators
console.log("Testing with 'and' and 'or':");
console.log(true && false);
console.log(true || false); 

// Test if an item is in an array
let language = ["english", "urdu", "sindhi"];
console.log("Is 'english' in language?");
console.log(language.indexOf("english")? true : false);

// Test if an item is not in an array
console.log("Is 'sindhi' not in language?");
console.log(language.indexOf("sindhi")? true : false);
