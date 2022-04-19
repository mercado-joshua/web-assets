let firstname = 'joshua';
let age = 23;
let age1 = '23'

const add = (a, b) => {
    return a + b;
};

function addStrings(a, b) {
    return Number(a) + b;
}

console.log(add(5, 20));

console.log(firstname);

console.log(addStrings(age1, age)); // 46

console.log(add(firstname, age)); // joshua23


let arr = ['areej', 'uriel', 'elisha', 'alex'];

let person = new Object();
person['name'] = 'joshua';
person['age'] = 23;


function printArrObj() {
    console.log(arr[0]);
    console.log(person.name);
    console.log(person.age);
}

console.log(printArrObj());


for(let i = 0; i <= 10; i++) {
    console.log(i);
};

// do {
//     let i = 0;
//     i++;
// } while (i <= 10);

let count = 0;
while (count <= 10) {
    console.log(count);
    count++;
}


function storages() {
    // storing data for a longer period of time

    // login data
    // access tokens
    // color schemes from your site

    // never deleted/no expiration time unless deleted from the browser from settings
    // localStorage.setItem(key, value);
    localStorage.setItem();

    // localStorage.getItem(key);
    // localStorage.removeItem(key);
    localStorage.getItem(); // reading data only
    localStorage.removeItem();
    localStorage.clear();

    // session data will be deleted/cleared when the whole browser is closed
    sessionStorage.setItem();
    sessionStorage.getItem();
    sessionStorage.removeItem();
    sessionStorage.clear();

}

function newURL() {
    window.location.replace('wwww.youtube.com');
    window.location.reload();
}

function test() {
    let formdt = new FormData();

    formdt.append('tst', '');

    return fetch('yourURL', {
        credentials: 'omit',
        method: 'POST',
        body: formdt,
        headers: new Headers({
            'testheader': ''
        })
    }).then(response => response.text()).catch(e => console.log(e));
}
