// primitive: the value is stored with assign-by-value

// reference: the value is stored with assign-by-reference
let name = 'josh';
let namecopy = name;

console.log('name', name); // josh
console.log('namecopy', namecopy); // josh

name = 'maj';
console.log('name', name); // maj
console.log('namecopy', namecopy); // josh

let user = {
    name: 'mike'
};

let usercopy = {...user}; // use ... to still use the original value

console.log('user', user);
console.log('usercopy', usercopy);

user.name = 'maj'

console.log('user', user);
console.log('usercopy', usercopy);