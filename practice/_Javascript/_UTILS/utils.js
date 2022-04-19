// Shallow Copy and Deep Copy | Advanced Javascript Tutorial
// https://www.youtube.com/watch?v=4Ej0LwjCDZQ

// creates new array
// TYPE: pure function
// USAGE: const newArr = deepClone(targetArr);

const deepClone = function(obj) {
    if(typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // create an array or object to hold the values
    const newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        const value = obj[key];

        // recursive call for nested objects & arrays
        newObj[key] = deepClone(value);
    }

    return newObj;
}

let sum = (...args) => [...args].reduce((total, item) => total += item);

// counts how many times the function was called
// TYPE: decorator function
const callCounter = (func) => {
    let count = 0;

    return (...args) => {
        // write to logs, db, consoles, etch
        console.log(`this ${func.name} function was called ${count += 1} times`);
        return func(...args);
    };
};

// USAGE:
sum = callCounter(sum);
console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3,4,5,6,7,8,9,10));
