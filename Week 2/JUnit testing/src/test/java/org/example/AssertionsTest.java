package org.example;
import org.junit.Test;
import static org.junit.Assert.*;
public class AssertionsTest {
    @Test
    public void demoAssertions() {
        // equals / not equals
        assertEquals("Sum mismatch", 5, 2 + 3);
        assertNotEquals("Should differ", 6, 2 + 3);
        // booleans
        assertTrue("5 should be > 3", 5 > 3);
        assertFalse("3 is not > 5", 3 > 5);
        // null checks
        Object obj = null;
        assertNull(obj);
        obj = new Object();
        assertNotNull(obj);
        // array/content equality
        int[] expected = {1,2,3};
        int[] actual   = {1,2,3};
        assertArrayEquals(expected, actual);
        // exception assertions (JUnit4 + Hamcrest)
        try {
            Integer.parseInt("abc");
            fail("Expected NumberFormatException");
        } catch (NumberFormatException ignored) {}
    }
}
