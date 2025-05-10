// Write a function that prints the numbers from 1 to 100. However, for multiples of three print "Fizz"
// instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of
// both three and five print "FizzBuzz".

function fizzbuzz() {
  // For Loop to iterate from 1 to 100.
  for (let i = 1; i <= 100; i++) {
    // Checking numbers' multiples with Module Operand.
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    // Checking if it's a multiple of 3 AND 5 first.

    else if (i % 3 === 0) console.log("Fizz");
    // If not, then we check if it's multiple of 3.

    else if (i % 5 === 0) console.log("Buzz");
    // If not, then we check if it's multiple of 5.

    else console.log(i);
    // If not, then we print the number.
  }
}

fizzbuzz(); //This function will be executed once.

// Basically, by using the Module Operand in 3 conditions inside the loop, we can check for every number and print what's required.
// The 4th condition would occur if the number's not a multiple of 3, 5 or both. This solution's logic could be applied in another language.
// José Martínez  (github.com/M164773)