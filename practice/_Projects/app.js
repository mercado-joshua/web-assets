// // function expression
// const func = function() {

// };

// // anonymous function
// (function() {
//     console.log('side effect');
// })();

// function expression and "this"
let person = {
    name: 'joshua',
    age: 23,
    company: {
        location: 'mabalacat'
    },
    skill: ['html', 'css', 'javascript'],
    profile: function() {
        console.log(this.name);
    }
};

console.log(person.company.location);
person.profile();
console.log(person.skill);
console.log(person.skill.join(', ')); // turn array to string


// callback function - a function that is passed to the second function as a parameter, and called in that function

function logMessages() {
    console.log('hello');
}

function printMessages(thisIsCallback) {
    thisIsCallback(); // call the function used as callback
}

printMessages(logMessages); // pass the function as a parameter


const replicateForEach = (arr, callback) => {
    for(let index = 0; index < arr.length; index++) {
        let item = arr[index];

        callback(item);
    }
};

replicateForEach([1, 2, 3, 4, 5], number => { console.log(`number: ${number}`) });

let connectionAttempt = 0;
let isConnected = false;

function connectToInternet() {
    if(connectionAttempt > 4) {
        isConnected = true;
        console.log('connected successfully');
    } else {
        console.log(`attempting to re-connect: ${connectionAttempt}`);
        connectionAttempt++;
        connectToInternet();
    }
}

connectToInternet();

let person = {
    name: 'joshua',
    age: 23,
    username: 'virama',
    password: 'anime123',

    get getUsername() {
        return this.username;
    },

    set newPassword(newPass) {
        console.log(`the new password is: ${newPass}`);
        this.password = newPass;
    }
};

// to use the getter
console.log(person.getUsername);

// to use the setter
console.log(person.password);
person.newPassword ='godlovesyou';
console.log(person.password);


// prototype to add properties and apply it to all single/ constructor objects

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.introduction = function() {
        console.log(`My name is: ${this.name}, and my age is ${this.age}`);
    }
}

let person1 = new Person('josh', 23);
let person2 = new Person('maj', 26);

Person.prototype.gender = 'male';
Person.prototype.hello = function() {
    return `My name is ${this.name}`;
};

console.log(JSON.stringify(person1));
console.log(JSON.stringify(person2));

console.log(person1.gender)
console.log(person1.hello())

// multi-dimensional array

let groups = [
    ['aljon', 'richard', 'josh', 'aerol', 'ronnel'],
    ['areej', 'uriel', 'alex', 'elisha', 'josh']
];

for(group in groups) {
    console.log(groups[group]);
    for(person in groups[group]) {
        console.log(groups[group][person]);
    }
}

let works = {
    josh: 'web developer',
    maj: 'munisipyo girl',
    frienchie: 'otaku'
}

for(work in works) {
    console.log(work);
}

const btn = document.createElement('button');
const para = document.querySelector('.para');
const text = document.createTextNode('hello world');

para.appendChild(text);


let people = {
    name: 'joshua',
    age: 23,

    set newName(name) {
        this.name = name;
    }
}

if(people.hasOwnProperty('name')) {
    console.log('yes it has "name" as his property');
    // people.newName = 'maj';

    // returns either 0 or -1, 0 means true, -1 means false
    if(people.name.indexOf('joshua') === -1) {
        people.newName = 'joshua';
    }
}

console.log(people.name);

let squammies = [
    {
        name: 'josh',
        age: 23
    },
    {
        name: 'maj',
        age: 26
    },
    {
        name: 'frienchie',
        age: 24
    }
];

squammies.forEach(function(element, index) {
    // console.log(element, index);
    element.mentor = 'hristo';
});

squammies.forEach(function(element, index) {
    console.log(element);
});

console.log(squammies[0].hasOwnProperty('mentor'));


// filter - filters arrays with certain conditions
let findJosh = squammies.filter(function(element) {
    return element.name === 'josh';
});

console.log(findJosh);

let oldest = squammies.filter(function(element) {
    return element.age > 23;
});

console.log(findJosh);
console.log(oldest);

// map - DYNAMICALLY change the array
squammies.map(function(element) {
    element.age++;
});

console.log(squammies);

// factory functions  - used to create objects

let capstoners = [];

function createMember(name, age, role) {
    return { name, age, role };
}

// new syntax
const createMember = (name, age, role) => ({ 
    name, age, role 
});

// you can add more properties and methods
const createMember = (name, age, role) => ({ 
    name,
    age,
    role,
    location: 'mabalacat',
    setName: function(name) {
        this.name = name;
    } 
});

const member1 = createMember('josh', 23, 'programmer');
capstoners.push(member1);

console.log(capstoners);


// triggering functions in javascript are synchronous
// promises - helps you to wait for an action to be done

// after you launch the promise, it will wait for an action to do
// after the action is succeed, you use resolve, if failed, it is reject
// let promises1 = new Promise(function(resolve, reject) {

//     // your code to run

//     resolve();

// });

// promises1;

let pers = {
    name: 'josh',
    age: 23
};

let {name, age} = pers;

console.log(name, age);

for(let [key, value] of Object.entries(pers)) {
    console.log(key, value);
}

// spread ... - merges group of arrays/objects

let arr1 = ['joshua', 'maj'];
let arr2 = ['frienchie', 'areej'];

let newArr = [...arr1, ...arr2];
console.log(newArr);

let obj1 = { name: 'joshua', age: 23 }

let obj2 = { name: 'maj', age: 23 }

let obj3 = { name: 'areej', age: 23 }

let newObj = { ...obj1, ...obj2, ...obj3 }

console.log(JSON.stringify(newObj, null, 2));

let obj4 = { name: 'maj', age: 23 }

let obj5 = { address: 'mabalacat', contact: 098898 }

let newObj1 = { ...obj4, ...obj5 }

console.log(JSON.stringify(newObj1, null, 2));


let newElement = document.querySelector('btn');
let target = document.getElementById('section-1');

document.body.insertBefore('newElement', target);

let sparseExample = ['a', 'b', 'c'];

console.log(sparseExample[2]);
sparseExample[10] = 'z';
console.log(sparseExample);

// start and step
function step_iterator(start, step) {
    return function() {
        let result = start; // hold the old value first
        start += step;
        return result;
    };
}

let numWithTwo = step_iterator(0, 2);

console.log(numWithTwo());
console.log(numWithTwo());
console.log(numWithTwo());
console.log(numWithTwo());
console.log(numWithTwo());


let elem = document.getElementById('div');
elem.getAttribute('width');
elem.childNodes[1].src = '';
elem.previousSibling;
elem.nextSibling;

let pictures = ['imag_path1', 'imag_path2'];

document.getElementById('div').getElementsByTagName('img')[0].src = pictures[0];