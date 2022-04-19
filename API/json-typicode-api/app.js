const baseURL = "https://jsonplaceholder.typicode.com";

const fetchPosts = async ( url ) => {
    try {
        const response = await fetch(`${ url }/posts`);

        if (!response.ok) {
            throw new Error(`Failed to fetch posts: ${ response.status }`);
        }

        const jsonData = await response.json();

        return jsonData;
    }
    catch ( error ) {
        console.error( error );
    }
};

const listPosts = ( selector ) => {
    const element = document.querySelector(selector);

    if (!element) {
        return;
    }

    fetchPosts(baseURL)
        .then((posts) => {
            if (!posts) {
                element.textContent = "no posts fetched";
            }

            posts.map((post) => {
                element.appendChild(createPost(post));
            });
        })
        .catch((error) => {
            console.error(error);
        });
};

const createPost = (data) => {
    const link = document.createElement("a");
    link.setAttribute("href", `${baseURL}/posts/${data.id}`);
    link.setAttribute("target", "_blank");
    link.textContent = `${data.title}`;

    const title = document.createElement("p");
    title.appendChild(link);

    return title;
};

listPosts("[data-js-post-section]");