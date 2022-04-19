// fetch api requires discussion of callbacks, thenables, promises and aync and await

// [1]
// callbacks - functions passed as parameters

function firstFunction(parameters, callback) {
    // do stuff with parameters

    callback(); // call the function, that amy call another function, essentialy a chain of events

    // promises are made to get RID of this, aka callback hell
}

// [2]
//  callback hell
// hard to follow
// common to see this in legacy code
firstFunction(parameters, function() {
    // do stuff
    secondFunction(parameters, function() {
        // do stuff
        thirdFunction(parameters, function() {

        });
    });
});

// [3]
// promises
// 3 states of promises - pending, fullfilled, rejected

// a promise is like: hey, I promise to pay you pay tomorrow, if you loan me the money today
// you go ahead and I'll catch up, once Im finished with my task, go over here

const myPromise = new Promise(function(resolve, reject) {
    const error = false;

    if(!error) {
        resolve('its resolve');
    } else {
        reject('its reject');
    }

    // this is just displaying the state of the promise, its not returning the value
});

// [4]
// to get the value of the promise, you need the .then()
// console.log(myPromise);

// if you chain .then(), you can pass their value to another .then by returning it
// myPromise
//     .then(function(value) {
//         return value + ' 1';
//     })
//     .then(function(newValue) {
//         console.log(newValue);
//     })
//     .catch(function(err) { // if it found an error,it can skip promise and .thenables then go to the .catch
//         console.error(err);
//     });

// promises used to:
// 1. avoid callback hell
// 2. requesting data from another server (we need to wait for the data to come back) before we can work with it 
// meaning (hey wait for this, and then do this after we get it)

const myNextpromise = new Promise((resolve, reject) => {
    // simulate a delay
    setTimeout(function() {
        resolve('my next promise resolve');
    }, 3000);
});

// javascript doesnt wait, it will run functions without delay effects first

// you go ahead and run the rest of the code, and I'll catch up
myNextpromise.then(function(value) {
    console.log(value);
});

myPromise.then(function(value) {
    console.log(value);
});

// the "pending"  state of promises

// fetch will request data from the web
const users = fetch('https://jsonplaceholder.typicode.com/users');

// pending
// dont attempt to log the results "RIGHT AWAY" especially when working data with a promise
console.log(users);