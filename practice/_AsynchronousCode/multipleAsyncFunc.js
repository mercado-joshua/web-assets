// create a mock API
const API = {
    getProductInfo: async (count, price) => {
        // [1] call the promise, sometime in the future
        const total = await new Promise((resolve, reject) => {
            // this add delay to the code, thats why the total was "undefined"
            setTimeout(() => {
                resolve(count + price);
            }, 500);
        });

        return API.postEmail('mabalacat', total);
    },
    postEmail: async (address, total) => {
        // [1] call the promise, sometime in the future
        return await new Promise((resolve, reject) => {
            // this add delay to the code, thats why the total was "undefined"
            setTimeout(() => {
                resolve(`email sent to ${address}, ${total}`);
            }, 1000);
        });
    }
};

window.onload = () => {
    API.getProductInfo('4', '10.00').then((response) => console.log(response));
};