// create a mock API
const API = {
    postEmail: (address, total) => setTimeout(() => {
        console.log(`email sent to ${address} confirming price of ${total}`);
    }, 1000)
};

window.onload = () => {
    const price = '19.99';
    let total;

    const calcTotal = async (count) => {
       
        // [1] call the promise, sometime in the future

        // "await" means dont do anything until this promises in a resolve state

        // a. wait for this to resolve or not
        const func1 =  await new Promise((resolve, reject) => {
            // this add delay to the code, thats why the total was "undefined"
            setTimeout(() => {
                resolve(total = count * price);
            }, 500);
        });

        // b. then do this, after the first one,
        // instead of chaining function with lots of .then()
        const func2 =  await new Promise((resolve, reject) => {
            // this add delay to the code, thats why the total was "undefined"
            setTimeout(() => {
                resolve(total = count * price);
            }, 500);
        });


    };

    const sendEmail = (total) => {
        debugger;
        API.postEmail('philippines', total);
    };

    // asynchronous
    // [2] 
    calcTotal('3').then((data) => { sendEmail(data) });

        // you can chain another
        // calcTotal('3')
        // .then((data) => { sendEmail(data) })
        // .then(() => notify());

        // ** dont interact with promises directly
        // console.log(calcTotal()) XX
};