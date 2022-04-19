const addForm = document.querySelector("[data-js-add-form]");
const inputOne = document.querySelector("[data-js-inputOne]");
const inputTwo = document.querySelector("[data-js-inputTwo]");


/** insert new post - POST method */
addform.addEventListener("submit", event => {
    event.preventDefault();

    fetch("", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: inputOne.value,
            body: inputTwo.value
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => { console.log(err.message) });
});

/** read post - GET method */
const postCard = document.querySelector("[data-js-post-card]");

postCard.addEventListener("click", event => {
    const btnID = event.target.id; // id="" in delete/edit btn

    const isDeleteBtnPressed = btnID == "delete-post";
    const isUpdateBtnPressed = btnID == "update-post";

    const postCardID = event.target.parentElement.dataset.id;


    /** Delete - delete existing post */
    if (isDeleteBtnPressed) {
        fetch(`${ url }/${ postCardID }`, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then(() => location.reload());
    }
    
    /** Delete - delete existing post */
    if (isUpdateBtnPressed) {

        const parent = event.target.parentElement;

        const title = parent.querySelector("[data-js-title]").textContent;

        // change their value
        inputOne.value = title;
    }

    /** update the existing post 
     * method: Patch
    */

    const btnSubmit = document.querySelector("[data-js-btn-submit]");

    btnSubmit.addEventListener("click", (event) => {
        event.preventDefault();

        fetch(`${ url }/${ postCardID }`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: inputOne.value,
                body: inputTwo.value
            })
        })
            .then(response => response.json())
            .then(() => location.reload());
    });

    // reset form data
    inputOne.value = "";
});

