// Given a list of integers, write a function that returns the sum of all unique elements (i.e., elements
// that appear only once in the list).

function sum(nums) {
  const count = new Map();
  let uniqueSum = 0;
  // count to keep track of the numbers; uniqueSum to return value.

  for (let num of nums) {
    if (count.has(num)) {
      // If the number is already in the map (counted), mark it as non-unique.

      if (count.get(num) === 1) {
        // If it's equal to 1 then it appeared before, substract its value from uniqueSum.
        uniqueSum -= num;
      }
      // Updating the amount of occurrences of this number.
      count.set(num, count.get(num) + 1);
    } else {
      // If it's the first occurrence, add it to the unique sum
      count.set(num, 1);
      uniqueSum += num;
    }
  }
  return uniqueSum; // Return the sum.
}

// We check the function with different arrays.
console.log(sum([1, 2, 3, 2, 4]));
console.log(sum([5, 5, 5, 5, 5]));

// We use a map to keep track of the counted values, then a for loop to iterate through every value from the array.
// If the number was already on the map then it's not unique, we remove it from the sum.
// Otherwise, we add it to the sum since it's the first occurrence. This solution's logic can be applied in many languages.
// José Martínez  (github.com/M164773)