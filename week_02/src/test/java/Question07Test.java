import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class Question07Test {
    @Test
    void evenOdd(){
        assertEquals("Odd", Question07.evenOdd(7));
    }
    @Test
    void evenOdd_02() {
        assertEquals("Even", Question07.evenOdd(8));
    }
    @Test
    void evenOdd_03() {
        assertEquals("Even", Question07.evenOdd(0));
    }
    @Test
    void evenOdd_04() {
        assertEquals("Odd", Question07.evenOdd(-7));
    }
    @Test
    void evenOdd_05_negativeEven() {
        assertEquals("Even", Question07.evenOdd(-12));
    }
    @Test
    void evenOdd_06() {
        assertEquals("Even", Question07.evenOdd(1_000_000));
    }
    @Test
    void evenOdd_08_integerMinValue() {
        assertEquals("Even", Question07.evenOdd(Integer.MIN_VALUE));
    }
    @Test
    void evenOdd_09_integerMaxValue() {
        assertEquals("Odd", Question07.evenOdd(Integer.MAX_VALUE));
    }






}
