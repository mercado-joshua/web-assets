const createContent = (list) => {
    const body = document.querySelector("[data-js-body]");

    list.forEach((data) => {
        const p = document.createElement("p");
        const img = document.createElement("img");
        img.src = data.avatar;
        p.textContent = data.first_name;
        body.appendChild(img);
        body.appendChild(p);
    });
};

const fetchData = async () => {
    const baseURL = "https://reqres.in/api/users/";

    try {
        const response = await fetch(baseURL);
        console.log(response);

        if (!response.ok) { 
            throw new Error(`Failed to fetch posts: ${ response.status }`);
        }

        const jsonData = await response.json();

        console.log(jsonData.data);
        // createContent(jsonData.data);
    }
    catch (error) {
        console.log(error);
    }
};



fetchData().catch(error => console.error(error));

/** create user */

const createData = async () => {
    const baseURL = "https://reqres.in/api/users/";
    const user = {
        name: "morpheus",
        job: "leader"
    };

    try {
        const response = await fetch(baseURL, {
            method: "POST",
            headers: { 
                accept: "application/json"
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) { 
            throw new Error(`Failed to create user: ${ response.status }`);
        }

        return await response.json();

    }
    catch (error) {
        console.log(error.message);
    }
};


createData()
    .then(data => console.log(data))
    .catch(error => console.error(error));


/** */

const fetchImage = async () => {
    const baseURL = "https://unsplash.it/600/400";
    
    try {
        const response = await fetch(baseURL);

        if (!response.ok) { 
            throw new Error(`Failed to get data: ${ response.status }`);
        }

        return await response.blob();

    }
    catch (error) {
        console.log(error.message);
    }
};

// fetchImage()
//     .then(blob => {
//         const img = document.createElement('img');
//         img.src = URL.createObjectURL(blob);
//         console.log(URL.createObjectURL(blob));
//         document.querySelector("body").appendChild(img);
//     });

const fetchPosts = async () => {
    const baseURL = "https://jsonplaceholder.typicode.com/posts";
    
    try {
        const response = await fetch(baseURL);

        if (!response.ok && !imgResponse.ok) { 
            throw new Error(`Failed to get data: ${ response.status }`);
        }

        const posts =  await response.json();
        let counter = 0;

        console.log(posts);
        posts.forEach(post => {
            counter++;

            if ( counter < 10 ) {
                const main =  document.querySelector("body");
                const title = post.title;
                const body = post.body;
                const header = document.createElement("h2");
                const p = document.createElement("p");

                header.textContent = title;
                p.textContent = body;

                main.appendChild(header);
                main.appendChild(p);
            }
        });

    }
    catch (error) {
        console.log(error.message);
    }
};

fetchPosts();




