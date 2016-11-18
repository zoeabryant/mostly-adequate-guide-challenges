require('../../support');
var Task = require('data.task');
var _ = require('ramda');

// Exercise 1
// ==========
// Use _.add(x,y) and _.map(f,x) to make a function that increments a value inside a functor

// map is used to run a function against a value in a functor
// so _.map(f,x) f is the add function, x is the value
// _.add(x,y) x is the value, y is the increment
// so take out x because a functor will hold it's own value, and map will access that value
// _.add is the f argument of _.map
// _.add's argument is 1 because increment
// ... I think...

// map :: (a -> b) -> [a] -> [b]
// add :: Int a -> Int b

// ex1 :: (Int a -> Int b) -> [Int a] -> [Int b]
var ex1 = _.map(_.add(1));



// Exercise 2
// ==========
// Use _.head to get the first element of the list
var xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);

// pointfree 🙌
// map runs _.head on value of Identity

// map :: (a -> b) -> [a] -> [b]
// head :: [a] -> a
var ex2 = _.map(_.head);



// Exercise 3
// ==========
// Use safeProp and _.head to find the first initial of the user
var safeProp = _.curry(function (x, o) { return Maybe.of(o[x]); });

var user = { id: 2, name: "Albert" };


var ex3 = _.compose(_.map(_.head), safeProp('name'));



// Exercise 4
// ==========
// Use Maybe to rewrite ex4 without an if statement

var ex4 = function (n) {
  if (n) { return parseInt(n); }
};

var ex4 = undefined;



// Exercise 5
// ==========
// Write a function that will getPost then _.toUpper the post's title

// getPost :: Int -> Future({id: Int, title: String})
var getPost = function (i) {
  return new Task(function(rej, res) {
    setTimeout(function(){
      res({id: i, title: 'Love them futures'})
    }, 300)
  });
};

var ex5 = undefined;



// Exercise 6
// ==========
// Write a function that uses checkActive() and showWelcome() to grant access or return the error

var showWelcome = _.compose(_.concat( "Welcome "), _.prop('name'));

var checkActive = function(user) {
 return user.active ? Right.of(user) : Left.of('Your account is not active')
};

var ex6 = undefined;



// Exercise 7
// ==========
// Write a validation function that checks for a length > 3. It should return Right(x) if it is greater than 3 and Left("You need > 3") otherwise

var ex7 = function(x) {
  return undefined; // <--- write me. (don't be pointfree)
};



// Exercise 8
// ==========
// Use ex7 above and either as a functor to save the user if they are valid or return the error message string. Remember either's two arguments must return the same type.

var save = function(x) {
  return new IO(function() {
    console.log("SAVED USER!");
    return x + '-saved';
  });
};

var ex8 = undefined;

module.exports = {ex1: ex1, ex2: ex2, ex3: ex3, ex4: ex4, ex5: ex5, ex6: ex6, ex7: ex7, ex8: ex8};
