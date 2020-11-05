// Boolean Logic


// Comparisons
/*
> - greater than
< - less than
>= - greater than or equal to
<= - less than or equal to
== - equality
!= - not equal
=== - strict equality
!== - strict non-equality
*/

console.log(-2 > 1);
console.log(10 < 999);
console.log(55.1 <= 55.5);
console.log("hello".length <= "hello!".length);

console.log('a' == 'a');
console.log('7' == 7);
console.log(false == false);
console.log(0 == ''); // true
console.log(null == undefined); // true
console.log(0 == false); // true

// If (Run code if a given condition is true)

let rating = 3;
if (rating === 3) {
    console.log("You are correct!");
}

let num  = 37;
if (num % 2 !== 0) {
    console.log("It's an odd number");
}

// Else if (If not the firs thing, maybe the other thing??)

let rating = 3;
if (rating === 3) {
    console.log("You are a superstar!");
}
else if (rating === 2) {
    console.log("MEETS EXPECTATIONS");
}
else {
    console.log("Invalid Rating");
}

// Nesting (We can nest conditionals inside conditionals)

let password = "cat dog";
if (password.length <= 6) {
    if (password.indexOf(' ') === -1 ) {
        console.log("Password cannot include spaces");
    }
    else {
        console.log("Valid Password!");
    }
}
else {
    console.log("Password too short!");
}

// And Operator

console.log(1<= 4 && 'a' == 'a');

let password = 'taco tuesday';
if(password.length >= 6 && password.indexOf(' ') === -1) {
    console.log('Password is Valid!');
}
else {
    console.log('Password is invalid.');
}

// Guess a number between 1 and 10

let num = 3;

if(num >= 1 && num <= 10) {
    console.log("Number is between 1 and 10");
}
else {
    console.log("Pease guess a number between 1 and 10");
}

// Or Operator (If one side is true, the whole thing is true)

console.log(1 !== 1 || 10 === 10);

let age = 3;

if(age < 6 || age > 65) {
    console.log("You get in for free!");
}
else {
    console.log("You must pay!");
}

// Not (!) - !expression returns true if the experession is false

console.log(!null);
console.log(! (0 === 0));
console.log(!(3 <= 4));

let flavor = 'watermelon';

if (flavor !==  'grape' && flavor !== 'cherry') {
    console.log("We don't have that flavor");
}

if (!(flavor === 'grape') || flavor === 'cherry') {
    console.log("We don't have that flavor");
}

// Switch Operator

let day = 1;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
}

let emoji = "happy face";

switch (emoji) {
    case 'sad face':
    case 'happy face':
        console.log('yellow');
        break;
    case 'eggplant':
        console.log('purple');
        break;
    case 'heart':
    case 'lips':
        console.log('red');
        break;
}

// Ternary Operator (condition ? expIfTrue: expIfFalse)

let num = 7;

if(num === 7) {
    console.log("Lucky");
}
else {
    console.log("Oh Well");
}

num === 7 ? console.log("lucky!"): console.log("Oh Well");