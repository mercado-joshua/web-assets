#variables

var name = 'joshua';
var age = 23;

#arrays

var arr = new Array('joshua', 23);

#objects

// singleton object
// initialize only once
// no matter how many used, there is only one instance of the object
const blogpost = new function () {
    this.name = 'joshua';
    this.age = age;
    this.details = function() {
        console.log(this.name);
    }
}

blogpost.details();

// constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.years = yearsleft;

    this.skill = addSkill;
}

function addSkill(skill) {
    this.newfoundSkill = skill;
}

function yearsleft() {
    return 70 - Number(this.age);
}

var joshua = new Person('joshua', 23);
console.log(joshua.name);
console.log(joshua.age);
console.log(joshua.years());

joshua.addSkill('salesforce');
console.log(joshua.skill);


let person = {
    name: 'joshua',
    age: 23,
    displayDetails: function() {
        console.log(this.name);
        console.log(this.age);
    }
};


#loops

for(var i = 0; i <= 10; i++) {
    console.log(i);
}

var count = 0;
while(count <= 10) {
    console.log(count);
    count++;
}

#functions

function myFunc() {
    console.log('function');
}

#conditional statements

if () {

}

else if() {

}

else {

}

switch() {
    case 1:
        // pass
    break;

    default:
        //
}

#event handling

onclick=""
onerror=""

#objects & OOP

#DOM

document.getElementById();

#localStorage/sessionStorage

window.localStorage.setItem();
window.location.reload();
window.location.replace()
