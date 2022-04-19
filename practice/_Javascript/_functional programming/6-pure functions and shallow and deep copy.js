// [1]
// primitive
// primitives pass values

// undefined, boolean, number, string
let x = 2;
let y = x;

y += 1;
console.log('y:', y);
console.log('x:', x);

// structural data types
// structural types use reference
// they dont pass values, they point it
// objects, array, map, set, functions
let arrX = [1,2,3];
let arrY = arrX;

arrY.push(4);

console.log('arrX:', arrX);
console.log('arrY:', arrY);


// [2]
// mutable vs immutable

// primitives are immutable
let names = 'josh';
console.log(names[0] = 'w'); // you cant modify it
console.log(names);

// reassignment is not the same as mutable
names = 'maj';
console.log(names);

// structures contain mutable data
// you can change elements in the array
arrY[0] = 9;
console.log('arrY:', arrY);
console.log('arrX:', arrX);

// [3]
// pure functions require you to avoid MUTATING the original data

// impure functions that mutates the data
// it mutates the original data
// it is considered a side effect

// NOTICE: "const" doesnt make the array immutable;
const mutatedArr = (arr, score) => {
    return arr.push(score);
};

mutatedArr(arrY, 5);
console.log('arrY:', arrY);
console.log('arrX:', arrX);

// [4]
// shallow copy vs deep copy (clones)

// 1. shallow copy - SPREAD OPERATOR (GOOD)
// NOTE: Array.from() and slice() create shallow copies too
let arrZ = [...arrY, 10];
console.log('arrY:', arrY);
console.log('arrZ:', arrZ);
console.log(arrY === arrX);
console.log(arrY === arrZ);

// 2. Object.assign() (GOOD)
// - copies iterable item into an empty array
// and assign it to the variable
let arrO = Object.assign([], arrY);
console.log('arO: ', arrO);

// for objects
const person = {
    name: 'joshua',
    age: 'age',
    skills : {
        a: 1,
        b: 2,
        c: 3
    }
};

Object.freeze(person);
person.skills.a = 1000;
console.log('person: ', JSON.stringify(person, null, 2));

const personCopy = {...person};
personCopy.skills.b = 2000;
console.log('personCopy: ', JSON.stringify(personCopy, null, 2));

// [5] but if there are nested arrays or objects
arrY.push([1,2,3,4,5]);
console.log('arrY:', arrY);

let arrV = [...arrY];
console.log('arrV:', arrV);


// nested structural data types still share a referrence
arrV[5].push(6); // added item to the image
console.log('arrV:', arrV);
console.log('arrY:', arrY); // it also affect the variable


// [6] Deep Copy
// [1] does not work with Dates, functions,
// undefined, infinity, Regex, Maps, Sets,
// Blob, filelist, imageData, and any
// other complex data types

const newObjCopy = JSON.parse(JSON.stringify(person));

// [2] 

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

// to use it on a pure function
const pureArr = (array, score, cloneFunc) => {
    const newArr = cloneFunc(array);
    newArr.push(score);
    return newArr;
};

const arrXX = pureArr(arrO, 18, deepClone);

console.log('arrXX', arrXX);
console.log(arrXX == arrO);