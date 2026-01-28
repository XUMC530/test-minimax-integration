/**
 * MiniMax Integration Test Module
 *
 * This module provides basic functionality for testing
 * GitHub integration workflows.
 */

/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtracts the second number from the first
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The difference of a and b
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The product of a and b
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divides the first number by the second
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} The quotient of a divided by b
 * @throws {Error} If divisor is zero
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

/**
 * Calculates the factorial of a number
 * @param {number} n - Non-negative integer
 * @returns {number} The factorial of n
 * @throws {Error} If n is negative
 */
function factorial(n) {
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

/**
 * Checks if a number is prime
 * @param {number} n - Number to check
 * @returns {boolean} True if n is prime, false otherwise
 */
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

/**
 * Generates a greeting message
 * @param {string} name - Name to greet
 * @param {string} [greeting="Hello"] - Greeting word
 * @returns {string} Greeting message
 */
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    factorial,
    isPrime,
    greet
};
