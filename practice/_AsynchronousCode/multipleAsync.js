// create a mock API
const API = {
    getProductInfo: (count, price) => {
        // [1] call the promise, sometime in the future
        return new Promise((resolve, reject) => {
            // this add delay to the code, thats why the total was "undefined"
            setTimeout(() => {
                resolve(count + price);
            }, 500);
        });
    },
    postEmail: (address) => {
        // [1] call the promise, sometime in the future
        return new Promise((resolve, reject) => {
            // this add delay to the code, thats why the total was "undefined"
            setTimeout(() => {
                resolve(`email sent to ${address}`);
            }, 1000);
        });
    }
};

window.onload = () => {
    // we wait forthemto finish before logging the response
    Promise.all([API.postEmail('joshua@gmail.com'), API.getProductInfo('4', '10.00')]).then((response) => console.log(response));
};