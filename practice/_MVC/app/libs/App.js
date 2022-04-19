class App {
    constructor(selector) {
        this.appElement = document.querySelector(selector);
        console.log('hello world');

        this.components = {};
    }

    addComponent(component) {
        this.components[component.name] = component;
    }

    showComponent(name) {
        this.currentComponent = this.components[name];
        this.updateView()
    }
}

export default App;