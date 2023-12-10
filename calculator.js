// Simple JavaScript Calculator

// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero.');
    }
    return a / b;
}

// Export functions for use in other modules
module.exports = {
    add,
    subtract,
    multiply,
    divide
};