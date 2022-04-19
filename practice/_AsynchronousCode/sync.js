// create a mock API
const API = {
    postEmail: (address, total) => setTimeout(() => {
        console.log(`email sent to ${address} confirming price of ${total}`);
    }, 1000)
};

window.onload = () => {
    const price = '19.99';
    let total;

    const calcTotal = (count) => {
        total = count * price;
    };

    const sendEmail = () => {
        debugger;
        API.postEmail('philippines', total);
    };

    // synchronous
    calcTotal('3'); // this will run first, take effect which result to the value being "undefined"
    sendEmail();
};