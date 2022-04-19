document.cookie = "SameSite";

const init = () => {
    /**
     * go to the bottom of the script and read comment [0]
     */
    const form = document.querySelector( "[data-js-form]" );

    /** [6] create a card component that holds each anime info */
    const createCard = ( data ) => {
        const card =
        `
        <div class="anime-card">
            <div class="imagebox">
                <img src="${ data.image_url }" alt="" class="image">
            </div>
            <div class="contentbox">
            <h2 class="title">${ data.title }</h2>
                <span class="episodes">episode: ${data.episodes}</span>
                <p class="description">${ data.synopsis }</p>
            </div>
            <div class="actionbox">
                <button class="card-btn"><a href="${ data.url }">Read more</a></button>
            </div>
        </div>
        `;

        return card;
    };

    /** [5] create a card component that holds each anime info */
    const displayCards = ( list ) => {
        const cardContainer = document.querySelector("[data-js-card-section]");

        cardContainer.innerHTML = "";
        let cards = "";

        list
            .sort( ( a, b ) => a.episodes - b.episodes )
            .map( anime => {
                cards += createCard( anime );  // read comment [6]
            });

            cardContainer.insertAdjacentHTML("beforeend", cards);
    };

    /** [4] get all the result's total number of episodes then sort them by ascending order */
    const sortAnimeByEpisodesASC = ( data ) => {
        const arrayOfAnimes = data.results;

        displayCards(arrayOfAnimes); // read comment [5]
    };

    /** [3] this function will get all the result data from the api */
    const getAnimeInfo = async (url, anime, page=1) => {
        try {
            const response = await fetch(`${url}/search/anime?q=${anime}&page=${page}`);

            if (!response.ok) {
                throw new Error(`Failed to fetch posts: ${ response.status }`);
            }

            const jsonData = await response.json();

            sortAnimeByEpisodesASC( jsonData );
        }
        catch (error) {
            console.error(error);
        }
    };

    /** [2] this function will get the value from input's "name" attribute */
    const getFormData = ( event ) => {
        event.preventDefault();

        const baseURL = "https://api.jikan.moe/v3";
        const formData = new FormData( form );
        const query = formData.get( "searchText" );

        getAnimeInfo(baseURL, query); // read comment [3]
    };

    /** [1] call this function when the form is submitted */
    form.addEventListener( "submit", getFormData ); // read comment [2]
};

/** [0] this make sure the page is loaded before calling the function */
document.addEventListener( "readystatechange", ( event ) => {
    if ( event.target.readyState === "complete" ) {
        init(); // after this, read comment [1]
    }
});
