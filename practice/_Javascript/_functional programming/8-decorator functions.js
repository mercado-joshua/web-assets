// they enhance/ decorate the core functionalities of other functions

// decorators wrap a function in another function

// these wrappers "decorate" the original function with new capabilites

// benefits DRY

// [1] define core
// core function, use let to your core functions if you want to use it with decorators

let sum = (...args) => [...args].reduce((total, item) => total += item);

// console.log(sum(1,2,3,4,5,6,7,8,9,10));

// [2] define decorator function

const callCounter = (func) => {
    let count = 0;

    return (...args) => {
        // write to logs, db, consoles, etch
        console.log(`this function was called ${count += 1} times`);
        return func(...args);
    };
};

sum = callCounter(sum);
console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3,4,5,6,7,8,9,10));