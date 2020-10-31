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
