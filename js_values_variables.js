// Goals: Work with primitive types, Understand let & const, Use String Template Literals, Work with common operators/methods

/* Primitive Types: Number, String, Boolean, Null, and Undefined 
   NaN (Not a Number): is a numeric value that represents something that is not... a number
*/


// Addition
const a = 50;
const b = 5;
const c = a + b;
console.log(c);

// Subtraction
const d = 90;
const e = 1;
const f = a - b;
console.log(f);

// Multiplicaotin
const g = 11111;
const h = 7;
const i = a * b;
console.log(i);

// Division
const j = 400;
const k = 25;
const l = j / k;
console.log(l);

// Modulo!!
const m = 27;
const n = 2
const o = 27 % 2;
console.log(o);

// Exponential
const p = 2;
const q = 4;
const r = 4 ** 2;
console.log(r);

// NaN
const s = 0;
const t = 0;
const u = 0/0;
console.log(u);

/* Variables are like "labeled jars" for
a value in JavaScript.

We can store a value and give it a
name, so that we can....
- recall it
- use it
- or change it later on.

Basic Syntax
let someName = value;
*/

// Recalling Variables
let hens = 4;
let roosters = 2;
hens + roosters;

// Updating Variables
let chickens = 4;
chickens - 1; // equals 3
chickens; // still has a vlaue of 4

// To actually change hens:
chickens = chickens - 1;
chickens; //3

let score = 0;
score += 1;
console.log(score);

let bonusMult = 3;
score *= bonusMult;
console.log(score);

// Unary Operators
let counter = 0;
counter++;
console.log(counter);

/* Const Variable 
- works just like let, except you CANNOT change the value

const hens = 4;
hens = 20 | ERROR!

const age = 17;
age = age + 1; | ERROR!
*/

const year = 1973;

// Why you const?

const pi = 3.14159;

const daysInWeek = 7;

const minHeightForRide = 60;