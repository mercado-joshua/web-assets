//  a blueprint for creating an object

class Pizza {
    constructor(pizzaType) {
        this.pizzaType = pizzaType,
        this.size = "medium",
        this.crust = "original",
        this.toppings = []
    }

    get pizzaCrust() { // use other name for methods
        return this.crust;
    }

    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }

    getToppings() {
        return this.toppings;
    }

    setToppings(toppings) {
        this.toppings.push(toppings);
    }

    /**
     * or
     * getCrust() {
     *  return this.crust
     * }
     * 
     * setCrust(crust) {
     *  this.crust = crust
     * }
     */

    // method
    bake() {
        console.log(`print this ${this.size} and ${this.crust} and ${this.pizzaType}`);
    }
}

// to create an object
const pizza = new Pizza('lasagna');
pizza.bake();
console.log(pizza.pizzaType);

// dont access properties directly, use getter and setter to do that
// pizza.pizzaType = 'changeMe';

// using getter and setter (preferred)
console.log(pizza.pizzaCrust);
pizza.pizzaCrust = 'changeMe';
console.log(pizza.pizzaCrust);