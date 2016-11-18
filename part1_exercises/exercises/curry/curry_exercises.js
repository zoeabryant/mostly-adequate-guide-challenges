require('../../support');
var _ = require('ramda');


// Exercise 1
//====================================================================================
// Refactor to remove all arguments by partially applying the function

// Original
//==============
// var words = function(str) {
//   return split(' ', str);
// };

// Solution: Apply Ramda curried split
//==============
var words = _.split(' ');

// Exercise 1a
//====================================================================================
// Use map to make a new words fn that works on an array of strings.


// Solution: Apply Ramda curried map with my nice words fn :D
//==============
var sentences = _.map(words);


// Exercise 2
//====================================================================================
// Refactor to remove all arguments by partially applying the functions



// Original
//==============
// var filterQs = function(xs) {
//   return filter(function(x){ return match(/q/i, x);  }, xs);
// };


// Solution:
// Partially apply match (like example hasSpaces in book)
// use curried filter to be Pointfree (chp5)
//==============
var hasQ = match(/q/i);
var filterQs = _.filter(hasQ);


// Exercise 3
//====================================================================================
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };


// Original
//==============
// REFACTOR THIS ONE:
// var max = function(xs) {
//   return reduce(function(acc, x){
//     return _keepHighest(acc, x);
//   }, -Infinity, xs);
// };

// Solution:
// Directly reference _keepHighest
// Ramda curry reduce
//==============
var max = _.reduce(_keepHighest, -Infinity);


// Bonus 1:
// ====================================================================================
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)


// Original
//==============
// var slice = undefined;

// Solution #1:
// Ramda curried slice... lazy
//==============
// var slice = _.slice;

// Solution #2:
// how to curry: feed in each argument piecemeal
// or use lodash/ramda's curry function to get out of this.
//==============

// Purity
// var slice = [Int, Func[Int Func[Array, Array]]]
var slice = function(start) {
  return function(end) {
    return function(array) {
      return array.slice(start, end);
    }
  }
};


// Bonus 2:
// ====================================================================================


// Original
//==============
// use slice to define a function "take" that takes n elements. Make it curried
// var take = undefined;

// Solution:
// Partially apply slice with starting point - which is the beginning of the array
//==============
var take = slice(0);


module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 };
