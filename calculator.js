// Basic JavaScript Calculator

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error('Cannot divide by zero');
  }
}

// Export the calculator operations
module.exports = {
  add,
  subtract,
  multiply,
  divide
};