package question02;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Test class for Question 02
 */
@DisplayName("Question 02 Tests")
class Question02Test {
    
    private final Question02 question02 = new Question02();
    
    @Test
    @DisplayName("Test example method")
    void testExampleMethod() {
        String result = question02.exampleMethod();
        assertEquals("Hello from Question 02", result);
    }
    
    // TODO: Add more test cases for Question 02
}

