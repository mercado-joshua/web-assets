// first class functions
// - when functions are treated like any other variable

// can be
// -assigned as value to another variable
// -passed as an to other functions
// -returned by other function


// higher-order functions
// - functions that operate on other functions
// - either by taking them as arguments or
// by returning them, are called higher-order functions

// [1] - either by taking them as arguments

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function run(operation, a, b) {
    const result = operation(a, b);
    console.log(result);
}

run(add, 1, 3);
