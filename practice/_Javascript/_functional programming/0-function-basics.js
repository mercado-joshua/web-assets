function range(start, end) {

    // [2] - or you can add default value for the parameters
    if (!start) {
        start = 0;
    }

    if (!end) {
        end = 0;
    }

    // [1] - only run if all required parameters are present
    if (start && end) {
        // code...
    } else {
        // missing parameters
    }
}

function range1(start, end) {
    start ? start : '';
    end ? end : '';

    console.log('hello world');
}

function range2(start=0, end=0) {
    console.log(start, end);
}

// what if you have unknown number of parameters?
// use (...) rest operator, this will turn your parameters
// into an array


function range3(...students) {
    console.log(students);
}

range3('a', 'b', 'c', 'd');

function askRide(pickup='current location', ...rides) {
    
}