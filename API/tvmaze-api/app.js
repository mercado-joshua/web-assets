const renderResults = (list) => {
    const cardContainer = document.querySelector("[data-js-card-section]");

    cardContainer.innerHTML = "";

    list.forEach((data) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = data.show.image ? data.show.image.original : "no image available";
        cardContainer.appendChild(paragraph);
    });
};

const debounce = ( fn, delay=500 ) => {
    let id;

    return (...args) => {

        if (id) {
            clearTimeout(id);
        }

        id = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

const searchShow = async (query) => {
    const baseURL = `https://api.tvmaze.com/search/shows?q=${query}`;

    try {
        const response = await fetch(baseURL);

        if (!response.ok) {
            throw new Error(`Failed to fetch posts: ${response.status}`);
        }

        const jsonData = await response.json();

        // document.querySelector("[data-js-error]").textContent = "";
        renderResults(jsonData);
    }
    catch (error) {
        console.error(error);
        // const error = document.querySelector("[data-js-error]");
        // error.textContent = error.message;
        // renderResults([]); // just return an empty string
    }
}

const search = document.querySelector("[data-js-search]");

search.addEventListener("keyup", debounce((event) => {

    // early exit
    if (event.target.value.trim().length === 0) {
        return;
    }
    searchShow(event.target.value);
}));