// [2] - how functions can be return by other functions

// currying
// -takes a function that receives more than one parameter
// and breaks it into a series of unary (one parameter) functions

// therefore, a curried function only takes one parameter at a time 

const buildSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
        }
    }
}

const mySandwich = buildSandwich('Bacon')('Lettuce')('Tomato');
console.log(mySandwich);


// refactor
const builtTeam = team1 => team2 => team3 => `${team1}, ${team2}, ${team3}`;
console.log(builtTeam('josh')('maj')('frienchie'));


// the function doesnt complete until it receives all of the parameters
const multiply = x => y => x * y;
console.log(multiply(2));
console.log(multiply(2)(3));

// partially applied currying
const timesFive = multiply(5);
console.log(timesFive);
console.log(timesFive(6));

const updateElementText = id => text => document.querySelector(`#${id}`).textContent = text;

const updateText = updateElementText('myID');

updateText('my text message');