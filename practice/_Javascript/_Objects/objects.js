const person = {
    name: 'joshua',
    skills: ['a', 'b', 'c'],
    location: {
        a: 1,
        b: 2,
        c: 3
    },
    age: 12
}

console.log(person.propertyIsEnumerable('name'));
console.log(person.propertyIsEnumerable('skills'));
console.log(person.propertyIsEnumerable('location'));
console.log(person.propertyIsEnumerable('age'));


// accessor property - if you want to do logic first before accesing the data
const person1 = {
    _name: 'josh', // naming convention, means it can only be accessed by "get"

    get name() {
        return this._name;
    },

    set name(name) {
        this._name = name;
    }
}

console.log(person1.name);

// access internal property attributes
// creates or modifes property attributes
Object.defineProperty(person1, 'name', {
    value: 'joshua',
    enumerable: false,
    configurable: false, // you cant delete it, even if you tried to

    get: function() {
        return this._name;
    }, // console.log(person1.name)

    set: function(name) {
        this._name = name;
    }
});

console.log(person1);