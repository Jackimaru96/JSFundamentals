'use strict';

const openingHours = {
  // Objects
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals, using another const defined globally
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Do not have to match the order of the parameters passed in! Just need the
  // same name
  // Defualt values
  orderDelivery({
    starterIndex = 1, // Default is Focaccia
    mainIndex = 0, // Default is Pizza
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/**
 * ============ Destructuring Arrays ============
 */

console.log(`Destructuring Arrays`);
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

// == (1): Basic manipulation
// ==== (A): Take first and second element of string array
const [first, second] = restaurant.categories;
console.log(first, second);

// ==== (B): skipping elements
let [one, , three] = restaurant.categories;
console.log(one, three);

// == (2): Switching elements
// e.g. swtich Main: Italian to Secondary: Vegetarian

// ==== (A): Without destructuring
// let temp = one;
// one = three;
// three = temp;
// console.log(one);

// ==== (B): With destructuring, switching
[one, three] = [three, one];
console.log(`switched variables ${one}, ${three}`);

console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// == (3): Destructuring nested arrays
const nested = [2, 4, [5, 6]];
// const [i, , [j,k]] = nested;
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// == (4): Setting Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

/**
 * ============ Destructuring Objects ============
 */

console.log('');
console.log('');
console.log(`Destructuring Objects`);

// == (1): Getting the whole object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// ==== (A): Different variable names
const { name: restName, openingHours: hours, categories: tags } = restaurant;
console.log(restName, hours, tags);

// ==== (B): Default values

// Without default values, error
console.log(
  'Without default value when introducing new variable; will be undefined'
);
const { menu, starterMenu: starters } = restaurant;
console.log(menu, starters);

// With default values
console.log('With default value when introducing new variable');
console.log('');
const { menu1 = [], starterMenu: starters1 = [] } = restaurant;
console.log(menu1, starters1);

// == (2): Mutating variables
console.log('');
console.log('Mutating variables');
let d = 111;
let e = 999;
const obj = { d: 23, e: 7, f: 14 };

// Syntax error
//{d,e} = obj;

// Needs to be wrapped in parenthesis
({ d, e } = obj);

console.log(d, e);

// == (3): Nested Objects
const {
  fri: { open: openHr, close: closeHr },
} = restaurant.openingHours;
console.log(`Opening hours on Friday is ${openHr} and closing is ${closeHr}`);

// == (4): Practical application of destructuring
// Often functions have many parameters, and it is hard to know order
// of these parameters. Instead of defining parameters manually,
// we can pass an object into the function as an argument
// Function will then immediately destructure that object

console.log('');
console.log('');
console.log('Destructuring function parameters');
// Pass in ONE object with 4 parameters instead of 4 parameters
restaurant.orderDelivery({
  time: '22:30',
  address: 'Bishan',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Bishan',
  starterIndex: 2,
});

/**
 * Spread operator
 * (1): Expanding arrays
 * (2): Passing arguments into functions
 */

console.log('');
console.log('');
console.log('');
console.log('Spread operator');

const arrSpread = [7, 8, 9];
const badNewArr = [1, 2, arrSpread[0], arrSpread[1], arrSpread[2]];
console.log(`This is the bad way of adding elements to array`);
console.log(badNewArr);

// (1): We can use the spread operator to expand arrays
const newArr = [1, 2, ...arrSpread];
console.log(`This is the better way of adding elements to array`);
console.log(newArr);
console.log('');

// (2): Individual elements of the array
// Can be used to pass elements into array individually
console.log(
  `Using the spread operator for getting individual elements in array`
);
console.log(...newArr);

// Example
const newMainMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMainMenu);

// Difference between spread operator and destructuring:
// Spread operator: takes all elements from the array
// and it also does not create new variables
// Hence, we can only use it in places that we would
// otherwise write values separated by commas

// (3): Create shallow copies of arrays
const mainMenuCopy = [...restaurant.mainMenu];

// (4): Merge two arrays together
const mainMenuCopy2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(mainMenuCopy2);

// (5): Iterables
console.log('');
console.log('');
console.log('Spread operator with Iterables');

const str = 'Jack';
const letters = [...str, '', 'Chen'];
console.log(letters);
console.log(...letters);

// (6): Application: Using spread operators to pass in multiple
// paramters into a function
console.log('');
console.log('');
console.log(
  'Application: Using spread operators to pass in multiple parameters into a function'
);

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2: ?'),
  // prompt('Ingredient 3: ?'),
  'mushroom',
  'bacon',
  'eggs',
];

restaurant.orderPasta(...ingredients);

// (7): Creating brand new objects with Spread operator
console.log('Creatinf brand new objects with spread operator');
const newRestaurant = { ...restaurant, founder: 'Jack' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restaurnt ABC';
console.log(restaurantCopy.name);
console.log(restaurant.name);
console.log('');
console.log('');
console.log('');

/**
 * Rest Pattern & Parameters
 * Spread operator unpacks an array, while the rest is
 * to pack elements into an array
 */

// SPREAD, as on RIGHT side of =
const arrSpread1 = [1, 2, ...[3, 4]];

// REST, as on LEFT side of =
// REST element collects elements that are unused in the
// destructuring assignment
const [ab, bc, ...others] = [1, 2, 3, 4, 5];
console.log(`Exploring REST pattern compared to SPREAD`);
console.log(ab, bc, others);

// (1): Arrays
console.log(``);
console.log(`Exploring REST with arrays`);
const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// (2): Objects
console.log(``);
console.log(`Exploring REST with objects`);
const { sat: saturdayObject, ...weekdays } = restaurant.openingHours;
console.log(saturdayObject);
console.log(weekdays);

// (3): Functions
console.log(``);
console.log(`Exploring REST with functions`);
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 1, 2);
add(5, 1, 2, 3, 1, 2);
const arrayOfNum = [1, 2, 3];
add(...arrayOfNum);

console.log(``);
console.log(`Example of usage in functions`);
restaurant.orderPizza('mushrooms', 'bacon', 'eggs', 'olives');

/**
 * Nullish Coalescing Operator
 */

console.log('');
console.log('Learning about Nullish Coalescing Operator');
// nullish values instead of falsy values
// nullish values: null / undefined (NOT 0 or '')
restaurant.numGuests = 0;

// This will give 10 as 0 is falsy value
const guests = restaurant.numGuests || 10;
console.log(guests);

// With restaurant.numGuests = 0, the below will give 0
// as 0 is not a null value
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// instead if we had a field that was null/undefined,
// the bottom will give 10
const guestCorrect2 = restaurant.notdefined ?? 10;
console.log(guestCorrect2);
console.log('');

/**
 * for of loop
 */
console.log('Learning about for of loops');
const loopMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const item of loopMenu) console.log(item);

// Getting index using for of loop
// Array.entries gives an ArrayIterator()
for (const [i, el] of loopMenu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(``);
console.log(`Learning about Enhanced Object Literals`);

/**
 * Enhanced Object Literals
 */
console.log('Look at the restaurant const');
console.log('');

/**
 * Optional Chaining
 * If certain property does not exist, then undefined is returned immediately
 */
console.log('Learning about Optional Chaining');

// This does not exist and hence will have an error
//console.log(restaurant.openingHours.mon.open);

// Checks if mon exists
// Checks if the object to the left exists
console.log(restaurant.openingHours.mon?.open);

// Example
const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// (1): Arrays
console.log(`For arrays`);
for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  const isClosed = open == `closed`;
  console.log(`On ${day} ${isClosed ? 'it is' : 'it is open at'} ${open}`);
}
console.log(``);

// Method
console.log(`For methods`);
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderMami?.(0, 1) ?? 'Method does not exist');

/**
 * Looping Objects: Object Keys, Values and Entries
 */
console.log('');
console.log('Learning about looping objects');

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

let openStr = `We are open on ${properties.length} days`;
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
// Key: Name, Value: value
const entries = Object.entries(openingHours);
console.log(entries);

// Destructure the name as key and value which is an object of open and close hours
for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}

console.log('');
console.log('Coding Challenge #2');

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1: Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [index, playerName] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${playerName}`);
}

// 2: Use a loop to calculate the average odd and log it to the console
// (We already studied how to calculate averages, you can go check if you don't remember)
let avgOdd = 0;
for (const oddValue of Object.values(game.odds)) {
  avgOdd += oddValue;
}
console.log(`Average odd is ${avgOdd / 3}`);

// 3: Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
for (const [teamName, oddValue] of Object.entries(game.odds)) {
  const stringToPrint = teamName === 'x' ? `draw` : `victory ${game[teamName]}`;
  console.log(`Odd of ${stringToPrint}: ${oddValue}`);
}

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
const scorers = {};

for (const players of game.scored) {
  scorers[players] ? scorers[players]++ : (scorers[players] = 1);
}

console.log(scorers);

const jackObject = {
  name: 'Jackimaru',
  age: 27,
  // Object
  certifications: {
    java: {
      name: 'Java',
      date: 'April 10',
    },
    csharp: {
      name: 'CSharp',
      date: 'June 10',
    },
  },
};

// Gets the object within certifications itself
console.log(``);
console.log(`Getting the object within the certifications field itself`);
for (const certificationObject of Object.entries(jackObject.certifications)) {
  console.log(certificationObject);
}

// Getting name of certifications
console.log(``);
console.log(`Getting the name of the certification`);
for (const certificationName of Object.keys(jackObject.certifications)) {
  console.log(certificationName);
}

// Getting details of each certification
console.log(``);
console.log(`Getting the details of the certification`);
for (const certificationDetails of Object.values(jackObject.certifications)) {
  console.log(
    `Name of certification is ${certificationDetails.name} and certified on ${certificationDetails.date}`
  );
}

/**
 * Learning about Sets
 *
 */

console.log('');
console.log('Learning about Sets');

// Only distinct
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Pizza', 'Pasta']);
console.log(orderSet);

// Getting size of set
console.log(`Size of set is ${orderSet.size}`);

// Seeing if an element is in set
console.log(`Does set contain Pizza? ${orderSet.has('Pizza')}`);
console.log(`Does set contain Bread? ${orderSet.has('Bread')}`);

// Deleting from the Set
orderSet.delete('Pizza');
console.log(orderSet);

// Example
const staff = ['Waiter', 'Chef', 'Chef', 'Manager'];
const staffUnique = new Set(staff);
// array from set
const staffUniqueArray = [...new Set(staff)];
console.log(staffUnique);
console.log(staffUniqueArray);

/**
 * Map
 */

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! '],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = 3;
console.log(answer);

const correctAns = question.get('correct');
answer === correctAns
  ? console.log(question.get(true))
  : console.log(question.get(false));

// Map back to array
console.log(...question);
console.log([...question.keys()]);
console.log([...question.values()]);

/**
 * Working with Strings
 */

const airline = 'SIA Singapore Airlines';
const plane = 'SA123';

console.log('test'[0]);
console.log(airline.indexOf('A'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 8));
// Space gets converted to %20
console.log(airline.slice(4, airline.indexOf('%20')));

// Replacing
const priceSGD = '$214.29';
const priceGB = priceSGD.replace('$', '€').replace('.', ',');
console.log(priceGB);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
//console.log(announcement.replace('door', 'gate'));

console.log(announcement.replaceAll('door', 'gate'));

// Regular expression
// console.log(announcement.replace(/door/g, 'gate'));

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  //console.log(rows);

  for (const rowName of rows) {
    const [first, second] = rowName.toLowerCase().trim().split('_');
    const secondModified = second.replace(second[0], second[0].toUpperCase());
    const output = `${first}${secondModified}`;
    console.log(`${output}`);
  }

  for (const [index, rowName] of rows.entries()) {
    //console.log(rowName);
    const [first, second] = rowName.toLowerCase().trim().split('_');
    //console.log(first, second);
    const secondModified = second.replace(second[0], second[0].toUpperCase());
    const output = `${first}${secondModified}`;
    //console.log(`${output}`);

    const modifiedOutput = `${output.padEnd(20)}${'✅'.repeat(index + 1)}`;
    console.log(`${modifiedOutput}`);
  }
});
/*
///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
// Data needed for a later exercise
*/
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flightDetails of flights.split('+')) {
  const [description, from, to, time] = flightDetails.split(';');

  // replace returns a new string need to put to new variable!
  const newDescrip = description.startsWith('_Delayed')
    ? '🔴 ' + description.replaceAll('_', ' ').trim()
    : description.replaceAll('_', ' ').trim();
  const newTime = time.replace(':', 'h');
  const newFrom = from.slice(0, 3).toUpperCase();
  const newTo = to.slice(0, 3).toUpperCase();
  console.log(`${newDescrip} from ${newFrom} to ${newTo} (${newTime})`);
}
