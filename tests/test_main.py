"""
Tests for MiniMax Integration Test Module
"""

import pytest
from src.main import add, subtract, multiply, divide, factorial, is_prime, greet


class TestMathOperations:
    """Test class for math operations"""

    def test_add_positive_numbers(self):
        assert add(2, 3) == 5

    def test_add_negative_numbers(self):
        assert add(-2, -3) == -5

    def test_add_mixed_numbers(self):
        assert add(5, -3) == 2

    def test_add_zero(self):
        assert add(5, 0) == 5

    def test_subtract_positive_numbers(self):
        assert subtract(5, 3) == 2

    def test_subtract_negative_result(self):
        assert subtract(2, 5) == -3

    def test_subtract_zero(self):
        assert subtract(5, 0) == 5

    def test_multiply_positive_numbers(self):
        assert multiply(3, 4) == 12

    def test_multiply_by_zero(self):
        assert multiply(5, 0) == 0

    def test_multiply_negative_numbers(self):
        assert multiply(-3, 4) == -12

    def test_divide_normal(self):
        assert divide(10, 2) == 5

    def test_divide_by_zero(self):
        with pytest.raises(ZeroDivisionError):
            divide(10, 0)

    def test_divide_negative_numbers(self):
        assert divide(-10, 2) == -5

    def test_factorial_zero(self):
        assert factorial(0) == 1

    def test_factorial_one(self):
        assert factorial(1) == 1

    def test_factorial_five(self):
        assert factorial(5) == 120

    def test_factorial_negative(self):
        with pytest.raises(ValueError):
            factorial(-1)

    def test_is_prime_true(self):
        assert is_prime(2) is True
        assert is_prime(3) is True
        assert is_prime(5) is True
        assert is_prime(7) is True
        assert is_prime(11) is True

    def test_is_prime_false(self):
        assert is_prime(1) is False
        assert is_prime(4) is False
        assert is_prime(6) is False
        assert is_prime(8) is False
        assert is_prime(9) is False
        assert is_prime(10) is False

    def test_greet_default(self):
        assert greet("World") == "Hello, World!"

    def test_greet_custom(self):
        assert greet("World", "Hi") == "Hi, World!"

    def test_greet_different(self):
        assert greet("Alice", "Welcome") == "Welcome, Alice!"
