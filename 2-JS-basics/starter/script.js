/*************
* Variables and data types
*/

/*
var firstName = 'Jorg';
console.log(firstName);
var lastName = 'Ancrath';
var age = 14;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//variable name rules
var 3years = 3;
*/

/**************************************************
 * Variable mutation and type coercion
 */

/* var firstName = 'Jorg';
 var age = 14;

 //Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;

job = 'Assassin';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

//Variable mutation

age = 'eighteen';
job = 'King';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName); */

/*********************
 * Basic operators
 */
var now, yearJorg, yearMakin, ageJorg, ageMakin; 
now = 2019;
ageJorg = 18;
ageMakin = 27;

// Math operators
yearJorg = now - ageJorg;
yearMakin = now - ageMakin;
console.log(yearMakin);
console.log(yearJorg);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical operators

var jorgOlder = ageJorg > ageMakin;
console.log(jorgOlder);

//Typeof operator

console.log(typeof jorgOlder);
console.log(typeof ageJorg);
console.log(typeof 'Makin is older than Jorg');
var x;
console.log(typeof x);







