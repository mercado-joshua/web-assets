      // const users = fetch('https://jsonplaceholder.typicode.com/users');

        // pending
        // dont attempt to log the results "RIGHT AWAY" especially when working data with a promise
        // console.log(users);

        // Disadvantage: you can have have lots of chaining thenables which is not desirable
        const users = fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {

            // [1]
            // call the json method of that "readableStream"
            return response.json(); // now you have the json data, return promise
        })
        .then(data => {
            console.log(data);

            data.forEach(element => {
                console.log(element);
            });

            // ** you cant suddenly get the data out inot the global area, because it will not execute the code in the same order
        });

        // results in "body:ReadableStream", means its not data we can work with yet

        console.log(users);

        // async/await is another way of "wait fot this to happen before I do this"