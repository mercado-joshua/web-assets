// pure functions

// why write pure functions

// 1, clean code
// 2, easy to test
// 3, easy to debug
// 4, decoupled and independent (not dependent to your script)
// 5, could be added to your utility class

// rules
// 1, the same input ALWAYS gives the same output
// 2, no side effects 

// [1] the same input always gives the same output

// e.g math and mathematics
const add = (x, y) => x + y;

const fullname = (first, last) => `${first} ${last}`;

// a pure function should have at least one parameter

// [2] no side effects
// accessing the scope outside the function
// access a database, API, file system, storage
// modify the DOM
// or even log to the console

// impure functions are necessary, but harder to trst and debug

// no input state can be modified, no data should be mutated
// consider all data to be immutable

// example 1
let x = 1;
const increment = () => x += 1;

// example 2
const arr = [1,2,3];
const addToArray = (array, data) => {
    array.push(data);
    return array;
};

// pure
// write small pure functions
// and you dont have to grasp everything about functional programming
const pureIncrement = num => num += 1;

const pureArr = (array, data) => [...array];

// pure functions always return something 
