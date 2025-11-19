import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question01Test {
    @Test
    void swapVariable_01(){
        assertEquals("a = "+ 10 + " b = "+ 5,Question01.swapVariable(5,10));
    }
    @Test
    void swapVariable_02(){
        assertEquals("a = "+ 8 + " b = "+ 7,Question01.swapVariable(7,8));
    }
    @Test
    void swapVariable_03() {
        assertEquals("a = 5 b = 5", Question01.swapVariable(5, 5));
    }
    @Test
    void swapVariable_04() {
        assertEquals("a = 10 b = 0", Question01.swapVariable(0, 10));
    }
    @Test
    void swapVariable_05() {
        assertEquals("a = -3 b = 7", Question01.swapVariable(7, -3));
    }
    @Test
    void swapVariable_06() {
        assertEquals("a = -20 b = -10", Question01.swapVariable(-10, -20));
    }
    @Test
    void swapVariable_07() {
        assertEquals("a = 2000000000 b = 1500000000",
                Question01.swapVariable(1500000000, 2000000000));
    }




}