

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question03Test {
    @Test
    void testArea_01(){
        assertEquals(24, Question03.calculateArea(6,4));
    }
    @Test
    void testArea_02(){
        assertEquals(24, Question03.calculateArea(4,6));
    }
    @Test
    void testArea_03() {
        assertEquals(10, Question03.calculateArea(1, 10));
    }
    @Test
    void testArea_04() {
        assertEquals(0, Question03.calculateArea(0, 5));
    }

    @Test
    void testPerimeter_01(){
        assertEquals(20, Question03.calculatePerimeter(6,4));
    }
    @Test
    void testPerimeter_02() {
        assertEquals(20, Question03.calculatePerimeter(4,6));
    }
    @Test
    void testPerimeter_03() {
        assertEquals(22, Question03.calculatePerimeter(1,10));
    }
    @Test
    void testPerimeter_04() {
        assertEquals(12, Question03.calculatePerimeter(6,0));
    }
}
