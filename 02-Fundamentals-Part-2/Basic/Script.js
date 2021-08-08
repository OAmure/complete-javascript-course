/****************************
* Varibles and data types
*/
var firstName = 'John' ;

var lastName = 'Smith' ;
var age = '44' ;

console.log(firstName, lastName, age);

var fullAge = true ;
console.log(fullAge);

 var job;
 console.log(job);

 job = 'Teacher';
console.log(job);

// Var naming rules
var _3years = 3;

/****************************
* Varibles mutation and type coersion
*/

var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = 'false';

console.log(firstName +  ' is a ' + age + ' year old ' + job + '.  Is he married? ' + isMarried);

// Var mutation
age = 'twenty eight';
job = 'driver';
isMarried = true;

alert(firstName +  ' is a ' + age + ' year old ' + job + '.  Is he married? ' + isMarried);

var lastName = prompt('What is his last name? ');
alert(firstName + ' ' + lastName);
console.log(firstName + '  ' + lastName);

/*********************************
* Basic Operators 
*/

var yearJohn = prompt('What year were you born? ')
var ageJohn = 2021 - yearJohn;
alert('John is ' + ageJohn);

// Logical operators

ageMark = 38;
var JohnOlder = ageJohn > ageMark;
console.log (JohnOlder); 
//If Statement
if (JohnOlder / true) {alert('John ' + lastName + ' is Older than Mark!');}
else {alert('John ' + lastName + ' is Younger than Mark!');}

/*********************************
*  Operator Precedence
*/



