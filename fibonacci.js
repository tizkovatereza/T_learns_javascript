// Function to print first X Fibonacci numbers as determined by the user
const printFibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
};

// Get user input for the value of X
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter the number of Fibonacci numbers to print: ', x => {
  const num = parseInt(x);
  if (!isNaN(num) && num > 0) {
    console.log(printFibonacci(num).join(', '));
  } else {
    console.log('Please enter a positive integer.');
  }
  readline.close();
});
