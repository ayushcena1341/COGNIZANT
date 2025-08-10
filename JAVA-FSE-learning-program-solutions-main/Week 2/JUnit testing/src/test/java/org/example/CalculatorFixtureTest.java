package org.example;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;
public class CalculatorFixtureTest {
    private Calculator calc;  // Shared object used in all tests
    @Before  // Runs before each @Test
    public void setUp() {
        calc = new Calculator();  // Arrange step
        System.out.println("Setup completed.");
    }
    @After   // Runs after each @Test
    public void tearDown() {
        calc = null;  // Cleanup
        System.out.println("Teardown completed.");
    }
    @Test
    public void add_shouldReturnCorrectSum() {
        int result = calc.add(4, 6);
        assertEquals(10, result);
    }
    @Test
    public void subtract_shouldReturnCorrectDifference() {
        int result = calc.subtract(9, 5);
        assertEquals(4, result);
    }
}
