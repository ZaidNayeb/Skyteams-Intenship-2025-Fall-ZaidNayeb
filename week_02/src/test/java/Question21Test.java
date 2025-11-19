import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question21Test {
    @Test
    void sumDigit_01(){
        assertEquals(6, Question21.sumDigit(123));
    }

    @Test
    void sumDigit_02() {
        assertEquals(7, Question21.sumDigit(7));
    }

    @Test
    void sumDigit_03() {
        assertEquals(0, Question21.sumDigit(0));
    }

    @Test
    void sumDigit_04() {
        assertEquals(2, Question21.sumDigit(1010));
    }

    @Test
    void sumDigit_05() {
        assertEquals(4, Question21.sumDigit(1111));
    }

    @Test
    void sumDigit_06() {
        assertEquals(45, Question21.sumDigit(99999));
    }

    @Test
    void sumDigit_07_negativeNumber() {
        assertEquals(-6, Question21.sumDigit(-123));
    }

    @Test
    void sumDigit_08_intMax() {
        assertEquals(46, Question21.sumDigit(Integer.MAX_VALUE));
    }

}


