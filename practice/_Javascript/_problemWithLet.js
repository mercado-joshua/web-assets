let color = 'outside color';

const colorPicker = name => {
    switch(name) {
        case 'red': {
            let color = 'red';
            return color;
        }
        case 'blue': {
            let color = 'blue';
            return color;
        }

        case 'green': {
            let color = 'green';
            return color;
        }

        default:
            return 'Invalid color';
    }
};

console.log(color);
console.log(colorPicker('red'));
console.log(colorPicker('blue'));
console.log(colorPicker('green'));
console.log(color);

