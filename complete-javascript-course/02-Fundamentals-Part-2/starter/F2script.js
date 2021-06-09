// Strict mode that helps to show more alerts and errors
'use strict';

// avoid incidental errors 
// create visible errors for us

let hasDriversLicense = false;
const passTest = true;

// hasDriverLicense is not defined; strict mode shows error for this
// if (passTest) hasDriverLicense = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);


/**
 * Functions
 */

// =============== Part 1: Function Expression vs Declaration ==============
// Function declaration; can be called before defining the function
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2021 - birthYear;
}

console.log(age1);

// Function expression; can only be called after defining the function
const calcAge2 = function (birthYear) {
    return 2021 - birthYear
}

const age2 = calcAge2(1996);
console.log(age2);

// =============== Part 2: Arrow Function ==================
// One liner function
const calcAge3 = birthYear => 2037 - birthYear

// multi-line function
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1996, "Jack"))
console.log(yearsUntilRetirement(1993, "Valerie"))

// Array operations
const friends = ['Michael', 'Jack', 'Peter'];

// ========== Add elements ==================
// push to the back of the array
friends.push('Jay');
console.log(friends);
// put at beginning of array
friends.unshift('First')

// ============== Remove elements ==============
// Returns the removed element
const popped = friends.pop(); // Take out last

// Array methods: 
// indexOf - shows the index of the given element
// includes - true/false of whether given element is inside array


// Coding challenge #2
function calcTip(billValue) {
    const is15 = (billValue >= 50 && billValue <= 300) ? true : false
    if (is15) {
        return billValue * 0.15
    }
    else {
        return billValue * 0.2
    }
}
const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(bills, tips);
// Cannot do totalCost = bills + tips as it will just concatenate the strings
const totalCost = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(totalCost)


// Introduction to Objects 
const jackArray = [
    'Jack',
    'Chen',
    2021 - 1996,
    'SE',
    ['Michael', 'Peter', 'Steven']
]

// Order does not matter
const jackObject = {
    // These are properties
    firstName: 'Jack',
    lastName: 'Chen',
    age: 2021 - 1996,
    birthYear: 1996,
    job: "Software Engineer",
    yearJoined: 2019,
    friends: ['Michael', 'Peter', 'Steven'],

    // Object methods
    // calcAge: function(birthYear) {
    //     return 2021 - birthYear;
    // }
    calcAge: function() {
        return 2021 - this.birthYear
    },

    // store in a variable
    calcYearsInJob: function() {
        this.yearsInJob = 2021 - this.yearJoined;
        return this.yearsInJob
    }
};

// Dot vs Bracket Notation
// Retrieve data from objects and also how to change data in objects
// using both dot and bracket notation
console.log(jackObject.age);
console.log(jackObject['age']);

const nameKey = 'Name';
console.log(jackObject['first'+ nameKey]);
console.log(jackObject['last'+ nameKey]);

const interestedIn = prompt("Enter interested field: firstName, lastName, age, job, friends");
(jackObject[interestedIn]) ? console.log(jackObject[interestedIn]) : console.log("No such field")

console.log(`Jack's age is ${jackObject.calcAge()}`)
console.log(`Jack has worked for ${jackObject.calcYearsInJob()} year(s) as a ${jackObject.job}`)

// Coding Challenge #3
const markObject = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi
    },

    getFullName: function() {
        this.fullName = this.firstName + " " + this.lastName;
        return this.fullName
    }
}

const johnObject = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi
    },

    getFullName: function() {
        this.fullName = this.firstName + " " + this.lastName;
        return this.fullName
    }
}

const isJohnBMIHigherThanMark = (johnObject.calcBMI() > markObject.calcBMI()) ? true : false
const firstPerson = isJohnBMIHigherThanMark ? johnObject : markObject;
const secondPerson = isJohnBMIHigherThanMark ? markObject : johnObject;
console.log(firstPerson.getFullName() + "'s BMI (" + firstPerson.calcBMI() + ") is higher than " + 
    secondPerson.getFullName() + "'s (" + secondPerson.calcBMI() + ")");


/**
 * Loops 
 * */
