window.document

console.dir(document);

document.domain
document.URL
document.title
document.all // arrays of all tags
document.all[0]
document.forms

// get elements

.getElementById()
.getElementsByClassName()
.getElementsByTagName()
.querySelector()
.querySelectorAll()

// manipulate elements

// create
// delete

// traverse parent & child
.parentElement

.children 

// event listeners

window.screenX;
window.screen.height;

let classNames = document.getElementsByClassName('.class'); // returns array of same class
classNames[0];

let tags = document.getElementsByTagName('img'); // return array of tags
tags[0];

let chooseOne = document.querySelector('.class'); // chooses only one
let chooseAll = document.querySelectorAll('.classes');
chooseAll[0];

let submit = document.querySelector('input[type="submit"]');

let p = document.getElementById('para');

p.innerText; // manipulate only the text part
p.innerHTML; // manipulates text and other <tags> inside
p.textContent; // manipulate the text,preserves line brakes

p.style.backgroundColor = 'red'; // manipulates style of an element

// parent & child

let child = document.querySelector('.child');
let parent = child.parentElement; // gets the parent element
parent.children; // returns an array of child elements of a parent

parent.append();
parent.prepend();


console.log(form.childNodes); // returns array of its children

firstChild.data; // gets information on the console 

let childOne = parent.children[0];

let firstChild = parent.firstElementChild;
let lastChild = parent.lastElementChild;

let travelParent = firstChild.parentElement.parentElement;

//
let createP = document.createElement('p');

createP.className = 'para'; // returns value, and can modify values

createP.classList = ['para', 'active']; // modify space separated values

console.log(form.children[0]);

form.classList.add('-active');
console.log(form.className);

createP.id = 'newID'; // adds id

createP.setAttribute('title', 'this is a hovered title');

let newText = document.createTextNode('new text');
createP.appendChild(newText);

let body = document.querySelector('body');
let form = document.querySelector('#form');

body.insertBefore(createP, form);

form.previousElementSibling; // previous element after the current element 
form.nextElementSibling;

// event listeners
let button = document.querySelector('button');

button.addEventListener('click', function(event) {
    event.preventDefault();
})

button.addEventListener('mousemove', function(event) {
    console.log(event.x);
    console.log(event.y);
});

button.addEventListener('click', function(event) {
    console.log(event);

    event.target.className;

    event.clientX; // x coordinates
    event.clientY; // y coordintes

    event.ctrlKey; // checks if you click the ctrl key, hold the key while doing the event
    event.altKey;
    event.shiftKey;

    event.preventDefault(); // good for forms, to prevent reloading the page
});

// .target - shows who calls the event, gives the actual element
// you can add attributes.. .src, .value, .className, .classList, .id, .type
// other info like exact mouse position
 
button.addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'red';
}, { once: true });