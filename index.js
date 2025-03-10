/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

let tongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5

// Print out the concatenated string

console.log(tongueTwister)


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

let javaSplit1 = part1.slice(0 , part1.length-1);
let javaSplit2 = part1.slice(-1);
let newPart1 = javaSplit1 + javaSplit2.toUpperCase()

let javaSplit3 = part2.slice(0 , part2.length-1);
let javaSplit4 = part2.slice(-1);
let newPart2 = javaSplit3 + javaSplit4.toUpperCase();

// Print the cameLtaiL-formatted string

console.log(newPart1 + newPart2);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

let result = 15 / 100

// Print out the tipAmount

console.log(result * billTotal );


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

console.log(Math.floor((Math.random() * 10) + 1));


// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;

// expression1 = false
// expression2 = true
// expression3 = false
// expression4 = true
// expression5 = true
// expression6 = false
// expression7 = true

console.log(expression1)
console.log(expression2)
console.log(expression3)
console.log(expression4)
console.log(expression5)
console.log(expression6)
console.log(expression7)