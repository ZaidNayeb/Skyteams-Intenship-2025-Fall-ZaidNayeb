import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question20Test {
    @Test
    void coundDigits_01(){
        assertEquals(3,Question20.countDigits(786));
    }
    @Test
    void coundDigits_02(){
        assertEquals(3,Question20.countDigits(-786));
    }
    @Test
    void coundDigits_03(){
        assertEquals(0,Question20.countDigits(0));
    }
    @Test
    void coundDigits_04(){
        assertEquals(1,Question20.countDigits(-7));
    }
    @Test
    void coundDigits_05() {
        assertEquals(1, Question20.countDigits(5));
    }
    @Test
    void coundDigits_06() {
        assertEquals(4, Question20.countDigits(1000));
    }
    @Test
    void coundDigits_07() {
        assertEquals(4, Question20.countDigits(-9000));
    }
    @Test
    void coundDigits_08() {
        assertEquals(9, Question20.countDigits(123456789));
    }
    @Test
    void coundDigits_09() {
        assertEquals(10, Question20.countDigits(Integer.MAX_VALUE));
    }
    @Test
    void coundDigits_10() {
        assertEquals(5, Question20.countDigits(40506));
    }






}
