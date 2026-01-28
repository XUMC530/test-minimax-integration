/**
 * Tests for MiniMax Integration Test Module
 */

const {
    add,
    subtract,
    multiply,
    divide,
    factorial,
    isPrime,
    greet
} = require('../src/main');

describe('Math Operations', () => {
    describe('add', () => {
        test('adds two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('adds two negative numbers', () => {
            expect(add(-2, -3)).toBe(-5);
        });

        test('adds positive and negative numbers', () => {
            expect(add(5, -3)).toBe(2);
        });

        test('adds zero', () => {
            expect(add(5, 0)).toBe(5);
        });
    });

    describe('subtract', () => {
        test('subtracts two positive numbers', () => {
            expect(subtract(5, 3)).toBe(2);
        });

        test('subtracts resulting in negative', () => {
            expect(subtract(2, 5)).toBe(-3);
        });

        test('subtracts zero', () => {
            expect(subtract(5, 0)).toBe(5);
        });
    });

    describe('multiply', () => {
        test('multiplies two positive numbers', () => {
            expect(multiply(3, 4)).toBe(12);
        });

        test('multiplies by zero', () => {
            expect(multiply(5, 0)).toBe(0);
        });

        test('multiplies negative numbers', () => {
            expect(multiply(-3, 4)).toBe(-12);
        });
    });

    describe('divide', () => {
        test('divides two numbers', () => {
            expect(divide(10, 2)).toBe(5);
        });

        test('throws error when dividing by zero', () => {
            expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
        });

        test('divides negative numbers', () => {
            expect(divide(-10, 2)).toBe(-5);
        });
    });

    describe('factorial', () => {
        test('calculates factorial of 0', () => {
            expect(factorial(0)).toBe(1);
        });

        test('calculates factorial of 1', () => {
            expect(factorial(1)).toBe(1);
        });

        test('calculates factorial of 5', () => {
            expect(factorial(5)).toBe(120);
        });

        test('throws error for negative numbers', () => {
            expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers');
        });
    });

    describe('isPrime', () => {
        test('identifies prime numbers', () => {
            expect(isPrime(2)).toBe(true);
            expect(isPrime(3)).toBe(true);
            expect(isPrime(5)).toBe(true);
            expect(isPrime(7)).toBe(true);
            expect(isPrime(11)).toBe(true);
        });

        test('identifies non-prime numbers', () => {
            expect(isPrime(1)).toBe(false);
            expect(isPrime(4)).toBe(false);
            expect(isPrime(6)).toBe(false);
            expect(isPrime(8)).toBe(false);
            expect(isPrime(9)).toBe(false);
            expect(isPrime(10)).toBe(false);
        });
    });

    describe('greet', () => {
        test('greets with default greeting', () => {
            expect(greet('World')).toBe('Hello, World!');
        });

        test('greets with custom greeting', () => {
            expect(greet('World', 'Hi')).toBe('Hi, World!');
        });

        test('greets with different greetings', () => {
            expect(greet('Alice', 'Welcome')).toBe('Welcome, Alice!');
        });
    });
});
