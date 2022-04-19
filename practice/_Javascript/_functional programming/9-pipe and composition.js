// often uses pipe and compose - higher order functions

// start with unary (one parameter) functions

const add2 = (x) => x + 2;
const minus1 = (x) => x - 1;
const multiplyby5 = (x) => x * 5;

// NOTICE: how functions execute from inside to outside & left to right

console.log(multiplyby5(minus1(add2(2))));

/// to get the compose order from right to left as we see with nested function calls in our example above, we need reduceRight

const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val);

const compResult = compose(multiplyby5, minus1, add2)(5);
console.log(compResult);

