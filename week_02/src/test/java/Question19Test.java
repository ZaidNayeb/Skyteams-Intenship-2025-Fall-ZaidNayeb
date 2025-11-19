import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question19Test {
    @Test
    void reverseNumber_01(){
        assertEquals(4321,Question19.reverseNumber(1234));
    }
    @Test
    void reverseNumber_02(){
        assertEquals(1234,Question19.reverseNumber(4321));
    }
    @Test
    void reverseNumber_03(){
        assertEquals(0,Question19.reverseNumber(00));
    }
    @Test
    void reverseNumber_04(){
        assertEquals(-4321,Question19.reverseNumber(-1234));
    }
    @Test
    void reverseNumber_05() {
        assertEquals(7, Question19.reverseNumber(7));
    }
    @Test
    void reverseNumber_06() {
        assertEquals(21, Question19.reverseNumber(1200));
    }
    @Test
    void reverseNumber_07() {
        assertEquals(1221, Question19.reverseNumber(1221));
    }
    @Test
    void reverseNumber_08() {
        assertEquals(-21, Question19.reverseNumber(-1200));
    }
    @Test
    void reverseNumber_09() {
        assertEquals(-1331, Question19.reverseNumber(-1331));
    }
    @Test
    void reverseNumber_10(){
        assertEquals(-8463847412L, Question19.reverseNumber(Integer.MIN_VALUE));
    }
    @Test
    void reverseNumber_11(){
        assertEquals(7463847412L, Question19.reverseNumber(Integer.MAX_VALUE));
    }


}
