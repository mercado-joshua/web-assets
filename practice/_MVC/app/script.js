import App from "./libs/App.js";

const app = new App("#app");

// add components
app.addComponent({
    name: "dogs",
    model: {
        dog: []
    },
    view(model) {
        return `<h2>There are ${model.dogs.length} dogs</h2>`;
    }
});

add.showComponent("dogs");