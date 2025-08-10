// src/test/java/com/example/CalculatorTest.java
package org.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {
    @Test
    public void add_shouldReturnSum() {
        // Arrange
        Calculator calc = new Calculator();
        // Act
        int result = calc.add(2, 3);
        // Assert
        assertEquals(5, result);
    }

    @Test
    public void subtract_shouldReturnDifference() {
        assertEquals(1, new Calculator().subtract(4, 3));
    }
}
