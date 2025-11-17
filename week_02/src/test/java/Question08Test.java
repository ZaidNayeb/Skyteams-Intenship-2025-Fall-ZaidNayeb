import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;


public class Question08Test {
    @Test
    void checkNumber_01(){
        assertEquals("Positive", Question08.checkNumber(3));
    }
    @Test
    void checkNumber_02() {
        assertEquals("Negative", Question08.checkNumber(-5));
    }
    @Test
    void checkNumber_03() {
        assertEquals("Zero", Question08.checkNumber(0));
    }
    @Test
    void checkNumber_04() {
        assertEquals("Positive", Question08.checkNumber(1_000_000));
    }
    @Test
    void checkNumber_05() {
        assertEquals("Negative", Question08.checkNumber(-1_000_000));
    }
    @Test
    void checkNumber_06() {
        assertEquals("Negative", Question08.checkNumber(Integer.MIN_VALUE));
    }
    @Test
    void checkNumber_07() {
        assertEquals("Positive", Question08.checkNumber(Integer.MAX_VALUE));
    }
    @Test
    void checkNumber_08() {
        assertEquals("Negative", Question08.checkNumber(-1));
    }
    @Test
    void checkNumber_09() {
        assertEquals("Positive", Question08.checkNumber(1));
    }








}
