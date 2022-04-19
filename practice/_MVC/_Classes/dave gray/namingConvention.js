//  a blueprint for creating an object


// a parent class/super class
class Pizza {
    constructor(pizzaType) {
        // private variable = telling other developers that this variables should not be modified outside the class, should only be modified, inside of the class using the get/set methods
        this._pizzaType = pizzaType,
        this._size = "medium",
        this._crust = "original",
        this._toppings = []
    }

    getToppings() {
        return this._toppings;
    }

    setToppings(toppings) {
        this.toppings.push(toppings);
    }
} // but you can still access the private variables, thats why the factory function is introduced


// factory function
// by using factory function, you eliminate the use of variables outside of the function
function pizzaFactory(pizzaCrust) {
    const crust = pizzaCrust;
    const type = 'lasagna';
    
    return {
        slice: function() {
            console.log(`this is ${crust}, and ${type}`);
        }
    }
}

const pizza = pizzaFactory('medium');
pizza.slice();
