const form = document.querySelector("[data-js-simple-form]");

form.addEventListener("submit", event => {
    event.preventDefault();

    console.log(event);

    console.log("test");

    // bundle the data and sent it to the server

    // to make formData to work, name="" in inputs are mandatory

    const myForm = event.target;
    const formData = new FormData(myForm); // replication of what a form does, an array of arrays



    // console.log(formData);

    // formData.append("name", "joshua");
    // formData.append("id", 123);

    // console.log(formData);

    // console.log(Array.from(formData));

    for (let key of formData.keys()) {
        console.log(key);
    }
    // URLserachParams
        
    console.log(formData);
    console.log(Array.from(formData));

    for (const [key, value] of Object.entries(formData)) {
        console.log(`${key}: ${value}`);
    }

    /** checkbox */
    const value = Object.fromEntries(formData.entries());
    value.skills = formData.getAll("skills");
    console.log("value", value);

    // send request with form data
    // const url = "http://127.0.0.1:5500/";
    // const request = new Request(url, {
    //     body: formData,
    //     method: "POST"
    // });

    // console.log("request: ", request);

    // fetch(request)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(err => console.log(err));


});