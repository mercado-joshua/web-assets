//  a blueprint for creating an object


// a parent class/super class
class Pizza {
    constructor(pizzaType) {
        this.pizzaType = pizzaType,
        this.size = "medium",
        this.crust = "original",
        this.toppings = []
    }

    getToppings() {
        return this.toppings;
    }

    setToppings(toppings) {
        this.toppings.push(toppings);
    }
}

// as a child, you are using the parents blueprint
// create a child class
class SpecialtyPizza extends Pizza {
    constructor(pizzaType) { // super should on the top before parameters
        super(pizzaType); // essentially calling the constructor of the parent
        this.type = "works";
    }

    slice() {
        console.log(`this is a ${this.pizzaType} and ${this.type}`);
    }
}

const child = new SpecialtyPizza('medium');
child.slice();


/**
 * Notice:
 * 
 * 1. you need to check both constructor of child and parent
 */