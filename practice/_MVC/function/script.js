// MVC design pattern
// a concept

// delegation of duties, separation of concerns
// works without depending on each other
// e.g Programmers can fix a bug in the view without changing the model code

// interacting with database
// has CRUD functions
// reads data from the database and sends back results to the controller
function Model () {
    this.calculate = function(a, b) {
        return a + b;
    }
}

// display the data
// view directory contains templates to display the data
// e.g templates to display database errors, forms
// after the controller tells the view the data is ready, the view provides the template to the controller
// the controller then sends a http response with data with proper view to the user
function View () {
    this.displayResult = function(selector, func) {
        const element = document.querySelector(selector);
        element.textContent = func;
    }
}

// index page
// controller doesn't display the data, thats the job of the view
// controller tells the view, the data is ready to display
function Controller (model, view) {
    this.model = model;
    this.view = view;

    this.view.displayResult('.paragraph', this.model.calculate(40, 60));
}

const view = new View();
const model = new Model();

Controller(model, view);