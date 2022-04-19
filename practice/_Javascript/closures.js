// lexical scope - variables in nested functions

// parent
// child function - has access to scope of parent and has access to the global scope

// global scope

// let x = 1;

// the parent func is the child of global scope
// function parentFunction() {
//     // local scope

//     let myValue = 2;

//     console.log(x);
//     console.log(myValue);

//     // child function
//     function childFunction() {
//         console.log(x += 5);
//         console.log(myValue += 5);
//     }

//     childFunction();
// }

// parentFunction();

// closure is a function having access to the parent scope, "even after the parent function has closed"

// a closure is created when we define a function, not when a function is executed.

let x = 1;

function parentFunction() {
    // local scope

    let myValue = 2;

    console.log(x);
    console.log(myValue);

    // child function
    function childFunction() {
        console.log(x += 5);
        console.log(myValue += 5);
    }

    return childFunction; // just returning the function
}
// [1]
// you can now use the result to call the child function
const result = parentFunction();
console.log(result);

result();
result();

console.log(x);
console.log(myValue);

// [2]
// immediately invoke function expression (IIFE)
const privateCounter = (function() {
    // this will only run, one time
    let count = 0;
    console.log(count);

    return function () {
        count++;
        console.log(count);
    };
})(); // this will call the function immediately
// this function will work after its creation, its already been invoked

privateCounter();


// IIFE with parameters
const credits = (function(num) {
    let credits = num;
    console.log(`initial credits: ${credits}`);

    return function() {
        credits--;
        // console.log(credits);

        if(credits > 0) {
            console.log(`play game? credits: ${credits}`);
        }
        else if(credits <= 0 ) {
            console.log('game over..');
        }
    };
})(5);

credits();
credits();
credits();
credits();
credits();