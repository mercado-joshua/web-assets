const init = () => {
  /*
  console.log(multiplyBy10(10)); // first time calculate
  console.log(multiplyBy10(10)); // re-calculate
  console.log(multiplyBy10(10)); // re-calculate
  */

  /*
  const multiplyBy10 = memoMultiplyBy10();
  console.log(multiplyBy10(10)); // first time calculate
  console.log(multiplyBy10(10)); // no need to re-calculate, just the retrieve value
  console.log(multiplyBy10(10)); // re-calculate

  console.log(multiplyBy10(50)); // first time calculate
  console.log(multiplyBy10(50));
  */

  const memoMultiplyBy10 = memoize( multiplyBy10 );
  console.log( memoMultiplyBy10(10) );
  console.log( memoMultiplyBy10(10) );

  const memoAddTwoNumbers = memoize( addTwoNumbers );
  console.log( memoAddTwoNumbers( 10, 10 ) );
  console.log( memoAddTwoNumbers( 10, 10 ) );
  console.log( memoAddTwoNumbers( 20, 10 ) );
  console.log( memoAddTwoNumbers( 10, 20 ) );
  console.log( memoAddTwoNumbers( 10, 20 ) );

  const memoAddMany = memoize( addMany );
  console.log( memoAddMany( 10, 10, 10) );
  console.log( memoAddMany( 10, 10, 10) );

  const memofibonnaci = memoize( fibonacci );
  console.log( memofibonnaci( 40 ) );
  console.log( memofibonnaci( 40 ) );
  console.log( memofibonnaci( 40 ) );
};

const multiplyBy10 = num => num * 10; 
const addTwoNumbers = ( num1, num2 ) => num1 + num2;
const addMany = ( ...args ) => args.reduce( ( acc, number ) => acc + number );

// example of a function that has intensive processing [ a recursive function ] ( means may take a while to load )
const fibonacci = ( pos ) => {
  if ( pos < 2 ) return pos;
  return fibonacci(pos - 1) + fibonacci( pos - 2 );
};

// 1
// closure function
const memoMultiplyBy10 = () => {
  const cache = {}; // private var, this is where you keep the results after calculating
  
  // return an anonymous function
  return ( num ) => {
    // retrieve and return the computed value from key in the cache
    // if ( num in cache ) return cache[num];
    if ( num in cache ) {
        console.log( cache );
        return cache[num];
    }

    const result = num * 10; // calculate
    cache[num] = result; // store the key:value
    return result;
  };
};

// 2
// decorator function
const memoizeExample = ( func ) => {
  const cache = {};
  
  // takes how many parameters passed in, this is an array of parameters
  return ( ...args ) => {
    if ( args.toString() in cache ) {
      console.log( 'cache: ', cache );
      console.log( 'args: ', args );
      return cache[ args.toString() ];
    }

    const result = fn(...args);
    cache[JSON.stringify(args)] = result;
    return result;
  };
  
};

// A memoize decorator function 
// that is capable of handling multiple parameters 
const memoize = (fn) => {
  const cache = {};

  return (...args) => {
      if (JSON.stringify(args) in cache) {
          // if you want to verify result comes from cache
          console.log(cache); 
          return cache[JSON.stringify(args)];
      }
      const result = fn(...args);
      cache[JSON.stringify(args)] = result;
      return result;
  }
}

document.addEventListener( 'DOMContentLoaded', init );