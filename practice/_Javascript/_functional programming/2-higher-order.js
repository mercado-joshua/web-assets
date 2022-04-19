// takes one or more functions as an argument
// or returns a functions as its result

// [1] forEach

posts = [
    'name', 'age', 'location', 'address'
];

// works similar to for loop
// good for iterating DOM elements or nodes and arrays
posts.forEach(post => {
    console.log(post);
});

const numbers = [1,2,3,4,5,6,7,8,9,10];

// map
// returns array
const multipliedByTwo = numbers.map(item => {
    return result = item * 2;
});

console.log(multipliedByTwo);

// filter
// returns array
// - good for filtering data
// - only accepts filter condition
const giveMeEight = numbers.filter(item => {
    return item === 8;
});

console.log(giveMeEight);


// reduce
// returns number
// total or accumulator, you can name whatever you like
const total = numbers.reduce((total, item) => {
    console.log('total: ', total);
    console.log('item: ', item);
    return total += item;
});

console.log(typeof total);
