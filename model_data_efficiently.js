// Booleans

let isLoggedIn = true;
let gameOver = false;
const isWaterWet = true;

// Booleans are simple True or False values. Yes or No. 1 or 0.

let isHungry = true;
isHungry;

isHungry = false;

// Strings
// In JavaScript, strings are pieces of text, or strings of characters. We have to wrap them in quotes

let firstName = "Ziggy" // double quotes works
let msg = "Please do not feed the dog!";
let animal = 'Dumbo Octopus'; // So do single quotes

let lastName = "Canaryfae";

// Concatenation
let fullName = firstName + " " + lastName;

// Strings are indexed, each character has a corresponding index (a positional number)

// String Indices
console.log("hello".length);

let mySong = "Surfin in USA";
console.log(mySong.length);
console.log(mySong[3]);

// String Methods

/* Strings come with a set of built-in methods,
which are actions that can be performed on or with that
particular strings.

We can do things like....
- Searching within a string
- Replacing parts of a string
- Changing case (upper/lowercase)
 */

let phrase = "you are so grounded mr";
phrase.toUpperCase();
console.log(phrase);

phrase = phrase.toUpperCase();
console.log(phrase);

// Trim method (removes leading and trailing whitespace)

let greeting = '   hello, how are you?    ';
console.log(greeting.trim());

let color = "  purple   ";
console.log(color.trim().toUpperCase());

// thing.method(arg) 
// Some methods accept arguments that modify their behavoir. We pass these arguments inside pf parentheses.

// indexOf(arg)
console.log("baseball".indexOf("ball"));

// slice(arg)

console.log("Baseball".slice(4));

let sport = "Baseball";
sport.slice(4);

// replace(arg)


let annoyingLaugh = 'teehee so funny! teehee!';

annoyingLaugh.replace('teehee', 'haha');

// String Escapes

/*
\n - newline
\' - single quote
\" - double quote
\\ - backslash
*/

// String Template Literals

/* Template literals are strings that allows
embedded expressions, which will be evaluated
and then turned into a resulting string */

let dreams = `I counted ${3 + 4} sheep`;
console.log(dreams);

let username = "Ziggy31";
console.log(`Welcome back, ${username}`);
console.log(`Game Over ${username.toUpperCase()}`);

let item = 'cucumbers';
let price = 1.99;
let quantity = 4;

console.log(`You bought ${quantity} ${item}, total price: $${price * quantity}`);