// Write a function that checks if a given word is a palindrome. A palindrome is a word that reads the
// same backward as forward (e.g., "radar", "level"). The function should ignore case and spaces.

function palindrome(w) {
  let normal = w.toLowerCase().replace(/\s+/g, "");
  // toLowerCase() transforms the variable to only have lowercase letters.
  // replace() uses a regular expression to detect any whitespace and replaces them with an empty string.

  let reversed = normal.split("").reverse().join("");
  // split() converts the word into an array, separating each character in different indexes.
  // reverse() reverses the order of the array. join() converts the array into a word again once it was reversed.

  return normal === reversed;
  // Returns true if both words are the same (palindrome) and false if they're not.
}

// Checking results with different words.
console.log(palindrome("Radar"));
console.log(palindrome("Hello"));
console.log(palindrome("A man a plan a canal Panama"));

// With the help of these JavaScript functions the problem becomes a lot simpler to solve and runs more efficiently.
// A different approach would be to evaluate each character individually, transforming them to lowercase and removing spaces.
// Then we reverse the result using a loop to then compare both results with other conditions and loops.
// That approach would fit in any language and can be accepted, but since this is JavaScript we can simplify the work by using these functions.
// José Martínez  (github.com/M164773)