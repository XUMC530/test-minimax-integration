"""
MiniMax Integration Test Module

This module provides basic functionality for testing
GitHub integration workflows.
"""


def add(a, b):
    """
    Add two numbers together

    Args:
        a: First number
        b: Second number

    Returns:
        The sum of a and b
    """
    return a + b


def subtract(a, b):
    """
    Subtract the second number from the first

    Args:
        a: First number
        b: Second number

    Returns:
        The difference of a and b
    """
    return a - b


def multiply(a, b):
    """
    Multiply two numbers

    Args:
        a: First number
        b: Second number

    Returns:
        The product of a and b
    """
    return a * b


def divide(a, b):
    """
    Divide the first number by the second

    Args:
        a: Dividend
        b: Divisor

    Returns:
        The quotient of a divided by b

    Raises:
        ZeroDivisionError: If divisor is zero
    """
    if b == 0:
        raise ZeroDivisionError('Division by zero is not allowed')
    return a / b


def factorial(n):
    """
    Calculate the factorial of a number

    Args:
        n: Non-negative integer

    Returns:
        The factorial of n

    Raises:
        ValueError: If n is negative
    """
    if n < 0:
        raise ValueError('Factorial is not defined for negative numbers')
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)


def is_prime(n):
    """
    Check if a number is prime

    Args:
        n: Number to check

    Returns:
        True if n is prime, False otherwise
    """
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False

    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True


def greet(name, greeting="Hello"):
    """
    Generate a greeting message

    Args:
        name: Name to greet
        greeting: Greeting word (default: "Hello")

    Returns:
        Greeting message
    """
    return f"{greeting}, {name}!"


if __name__ == "__main__":
    # Demo usage
    print("MiniMax Integration Test Module")
    print("=" * 40)

    print(f"add(2, 3) = {add(2, 3)}")
    print(f"subtract(5, 3) = {subtract(5, 3)}")
    print(f"multiply(3, 4) = {multiply(3, 4)}")
    print(f"divide(10, 2) = {divide(10, 2)}")
    print(f"factorial(5) = {factorial(5)}")
    print(f"is_prime(7) = {is_prime(7)}")
    print(f"greet('World') = {greet('World')}")
    print(f"greet('Alice', 'Hi') = {greet('Alice', 'Hi')}")
