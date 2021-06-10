// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;

const calcAge = birthYear => 2037 - birthYear;
console.log('test');
console.log('testing 123');

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    value: Number(prompt('Degree celsius: ')),
  };

  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
