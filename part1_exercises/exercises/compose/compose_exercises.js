require('../../support');
var _ = require('ramda');
var accounting = require('accounting');

// Example Data
var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];

// Exercise 1:
// ====================================================================================
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.


// Original
//==============
// var isLastInStock = function(cars) {
//   var reversed_cars = _.last(cars);
//   return _.prop('in_stock', reversed_cars)
// };

// Solution
// _.last goes first
// _.prop is partially applied with 'in_stock'
//==============

var isLastInStock = _.compose(_.prop('in_stock'), _.last)


// function(cars) {
//   var reversed_cars = _.last(cars);
//   return _.prop('in_stock', reversed_cars)
// };

// Exercise 2:
// ====================================================================================
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car

// Original
//==============
// var nameOfFirstCar = undefined;

// Solution
// Use _.head to get the first object in CARS
// Use _.prop('name') to get the name from that object
// rather than cars.head.name? ...
//==============
var nameOfFirstCar = _.compose(_.prop('name'), _.head);


// Exercise 3:
// ====================================================================================
// Use the helper function _average to refactor averageDollarValue as a composition
var _average = function(xs) { return reduce(add, 0, xs) / xs.length; }; // <- leave be

// Original
//==============
// var averageDollarValue = function(cars) {
//   var dollar_values = map(function(c) { return c.dollar_value; }, cars);
//   return _average(dollar_values);
// };

// Solution
// :O I managed this first time!
// load a curried map with a partially applied _.prop
// then run average
//==============
var averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')));

// Exercise 4:
// ====================================================================================
// Write a function: sanitizeNames() using compose that takes an array of cars and returns a list of lowercase and underscored names: e.g: sanitizeNames([{name: "Ferrari FF"}]) //=> ["ferrari_ff"].
var _underscore = replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

// Original
//==============

// var sanitizeNames = undefined;

// Solution #1
// sanitize is reusable (DON'T compose map)
//==============
// var sanitize = _.compose(_.toLower, _underscore);
// var sanitizeNames = _.map(_.compose(sanitize, _.prop('name')));

// Solution #2
// after reading answers...
// composition of 2+ things is a good thing.
// either way map is not composed...
//==============
var sanitizeNames = _.map(_.compose(_.toLower, _underscore, _.prop('name')));

// Bonus 1:
// ====================================================================================
// Refactor availablePrices with compose.

// Original
//==============
// var availablePrices = function(cars) {
//   var available_cars = _.filter(_.prop('in_stock'), cars);
//   return available_cars.map(function(x){
//     return accounting.formatMoney(x.dollar_value)
//   }).join(', ');
// };

// Solution...
//==============
// var availablePrices = _.compose(_.join(', '), )




// Bonus 2:
// ====================================================================================
// Refactor to pointfree. Hint: you can use _.flip()

var fastestCar = function(cars) {
  var sorted = _.sortBy(function(car){ return car.horsepower }, cars);
  var fastest = _.last(sorted);
  return fastest.name + ' is the fastest';
};


module.exports = { CARS: CARS,
                   isLastInStock: isLastInStock,
                   nameOfFirstCar: nameOfFirstCar,
                   fastestCar: fastestCar,
                   averageDollarValue: averageDollarValue,
                   availablePrices: availablePrices,
                   sanitizeNames: sanitizeNames
                 };

// Original
//==============

// Solution
//==============
