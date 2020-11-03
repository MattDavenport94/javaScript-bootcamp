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

const minAge = 21;
const yourAge = 19;

console.log(`You must be ${minAge} to enter. Come back in ${minAge - yourAge} years`);

// Null & Undefined

/*
Null
- "Intentional absence of any value"
- Must be assigned

Undefined
- Variables that do not have an assigned value are undefined
*/

// No one is logged in yet...
let loggedInUser = null;

// A user logs in....
loggedInUser = 'Alan Rickman';

"lol"[4];

const u = undefined;

let color;

// Math Object

/*
Contains properties and methods for mathematical
constants and functions
*/

// The number for PI:
console.log(Math.PI);

// Rounding a number: 
console.log(Math.round(4.9));

// Absolute Power:
console.log(Math.abs(-456));

// Raises 2 to the 5th power:
console.log(Math.pow(2,5));

// Removes decimal:
console.log(Math.floor(3.9999));

// Random Numbers gives us a random number
console.log(Math.random());

// Random Integer
const step1 = Math.random();
const step2 = step1 * 10;
const step3 = Math.floor(step2);
const step4 = step3 + 1;

console.log(Math.floor(Math.random() * 10) + 1);

// Dice roll not above 6

const dice1 = Math.random() * 6;
const dice2 = Math.floor(dice1) + 1;

// Type of

console.log(typeof 99);
console.log(typeof true);

let mystery = "99 ballons";
console.log(typeof mystery);

// parseInt & parseFloat

/*
Use to parse strings into numbers,
but watch out for NaN!
*/

console.log(parseInt('24'));
console.log(parseInt('24.565432'));

console.log(parseFloat('24.9843'));
console.log(parseFloat('7'));

