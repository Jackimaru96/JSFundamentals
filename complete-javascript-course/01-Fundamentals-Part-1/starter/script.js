let js = "amazinga"
if (js == "amazing") alert("Javascript is fun")

console.log(40 + 8 + 23 - 10);
let PI = '123';
/**
 * Variable syntax
 *
**/ 
// can start with '$'or '_'

/**
 *  Declaring variables using 'let', 'const', 'var'
 * */ 
// const is immutable
// Need initial value when using const
const birthYear = 1996

// let is mutable
let booleanValue = true

// var (legacy code); similar to 'let'; mutable
var job1 = "programmer";

/**
 * Operators
 */

 // 2 ** 3 means 2 to the power of 3
 //

 /** Assignment 1 */
 const country = "Singapore"
 const continent = "Asia"
 const population = 1000000

 console.log(country + " " + continent + " " + population);

 // Literals template
 const firstName = "Jack";
 const year = 2021;
 const job = "Software Engineer"
 const jack = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
 console.log(jack)

 console.log(`String with \n\
 multiple \n\
 lines`);

 /** 
  * Type coversion vs coercion 
  * */
 // This is a string
 const inputYear = '1991';
 // Convert to number using Number
 console.log(Number(inputYear));
 console.log(Number(inputYear) + 18);

 // NaN: invalid number (Not a Number); typeof(NaN) is number

 let n = '1' + 1 //'11'
 n = n -1  // 10
 console.log(`n is ${n}`)

 let s = 2 + 3 + 4 + '1' // '91'
 console.log(`s is ${s}`)

 // 5 falsy values: 0, '', undefined, null, NaN
 console.log(Boolean(0));
 console.log(Boolean(undefined));
 console.log(Boolean(''));
 console.log(Boolean(null));
 console.log(Boolean(NaN));

 // == vs ===

 // '===' / '!==' : strict
 // '==' / '!=' : loose
 // Always use === for comparison to prevent bugs
 const age = '18';
 if (age === 18) console.log("strict")
 if (age == 18) console.log("loose")

 // Prompting user and storing values
 const favNum = Number(prompt("What is your favourite number"));
 console.log(`Your fav number is ${favNum}, the type of favNum is ${typeof favNum}`)

 if (favNum == 23) {
     console.log(`This will execute if favNum is 23`)
 }

 if (favNum === 23) {
     console.log(`This will only execute if favNum is 23 and of type number`)
 }

 // expressions produce values; statements are just like 
 // full sentences that translate actions (that we want program to perform)

 /**
  * Ternary operator
  */
 // condition ? executedIfTrue : executedIfFalse
 const ageNow = 23;
 age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink milk`)

 // store into variable
 const drink = age >= 18 ? "wine" : "milk";
 console.log(`I like to drink ${drink}`)

 let scenario = prompt("What is the bill scenario?");
 let bill;
 switch(scenario) {
     case '1':
         bill = 275;
         break;
     case '2':
         bill = 40;
         break;
     case '3':
         bill = 430;
         break;
 }


 let isTip15 = (bill >= 50 && bill <= 300) ? true : false
 let tip = isTip15 ? bill * 0.15 : bill * 0.20
 let tipPercent = isTip15 ? "15%" : "20%"

 console.log(`Bill is $${bill}, tip is ${tipPercent} of bill ($${tip}) and totals to $${tip + bill}`)

 