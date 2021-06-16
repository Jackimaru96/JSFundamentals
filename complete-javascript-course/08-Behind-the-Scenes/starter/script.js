'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var test = 'test';
      // Creating new variable with same name as outer scope's variable
      const firstName = 'Changed';

      // Reassigning outer scope's variable
      const output = 'new output';

      // firstName will take the closest scope, which in this case
      // is the block scope
      const str = `Oh, you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    /**
     * functions are block-scoped (in strict mode only);
       cannot access outside block
     */
    // console.log(add(1, 2));

    // cannot access str which is block-scoped; cannot access outside block
    // console.log(str);

    // var variables are function-scoped; hence can access within the function
    console.log(test);
  }

  printAge();

  return age;
}

const firstName = 'Jack';
calcAge(1996);

// Cannot access printAge() from global scope
// Cannot access local variable age from global scope

/**
 * Primitives vs Objects (Reference type)
 *  */

let lastName = 'Chen';
let oldLastName = lastName;
lastName = 'Tan';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
// works even for const because we are changing
// value on heap instead of on stack
marriedJessica.lastName = 'Tan';
console.log(`Before marriage: `, jessica);
console.log(`After marriage: `, marriedJessica);

// This will not work as we are changing the value
// on the stack
// marriedJessica = {};

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Getting a copy of the object
// using Object.assign();
// merge two objects and then return a new one
// All the properties will be copied
// original jessica2 lastName is preserved this
// way when we change the lastName of jessicaCopy
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Tan';
console.log(`Before marriage: `, jessica2);
console.log(`After marriage`, jessicaCopy);

// However, Object.assign() only works on the first level
// If we have an object inside an object, the inner object
// will actually still be the same, so it will point to
// the same place in memory
// Example below where an array is updated in the copy, it will
// be updated in the original jessica2 as well
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log(`Before marriage: `, jessica2);
console.log(`After marriage`, jessicaCopy);

// Deep cloning to be able to copy the inner objects as well
// Can be done using libraries like Lo-Dash
