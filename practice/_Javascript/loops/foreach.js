const arr = [1,2,3,4,5];

arr.forEach(element => {
    console.log(element);
});

arr.forEach((element, index) => {
    console.log(`${element} ${index}`);
});

arr.forEach((element, index, arry) => {
    console.log(`${element} ${index} ${arry}`);
});

