package question01;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Test class for Question 01
 */
@DisplayName("Question 01 Tests")
public class Question01Test {
    
    
    @Test
    void testAdd_1() {
        Question01 question01 = new Question01();
        assertEquals(3.0 , question01.add(1.0, 2.0));
    }

    @Test
    void testAdd_2(){
        assertEquals(-4.0, new Question01().add(-3.0, -1.0));
    }
    
}
