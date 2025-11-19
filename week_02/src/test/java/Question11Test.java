import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question11Test {
    @Test
    void calculator_01(){
        assertEquals(11,Question11.calculator(5,6,'+'));
    }
    @Test
    void calculator_02() {
        assertEquals(-1, Question11.calculator(5, 6, '-'));
    }
    @Test
    void calculator_03() {
        assertEquals(30, Question11.calculator(5, 6, '*'));
    }
    @Test
    void calculator_04() {
        assertEquals(2, Question11.calculator(12, 6, '/'));
    }

    @Test
    void calculator_06() {
        assertEquals(-1, Question11.calculator(-5, 4, '+'));
    }
    @Test
    void calculator_07() {
        assertEquals(6, Question11.calculator(0, 6, '+'));
    }
    @Test
    void calculator_08() {
        assertEquals(0, Question11.calculator(0, 0, '-'));
    }










}
