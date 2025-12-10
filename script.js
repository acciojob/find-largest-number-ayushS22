function findLargest(a, b, c) {
  // Assume a is the largest initially
  let largest = a;

  // Compare with b
  if (b > largest) {
    largest = b;
  }

  // Compare with c
  if (c > largest) {
    largest = c;
  }

  return largest;
}

// Taking user input
const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));

alert(findLargest(num1, num2, num3));
