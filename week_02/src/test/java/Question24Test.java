import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question24Test {
    @Test
    void findGCD_01(){
        assertEquals(6, Question24.findGCD(12,18));
    }
    @Test
    void findGCD_02(){
        assertEquals(1, Question24.findGCD(7,9));
    }
    @Test
    void findGCD_03(){
        assertEquals(10, Question24.findGCD(10,100));
    }
    @Test
    void findGCD_04(){
        assertEquals(0, Question24.findGCD(0,5));
    }
    @Test
    void findGCD_05(){
        assertEquals(8, Question24.findGCD(24,56));
    }
    @Test
    void findGCD_06(){
        assertEquals(3, Question24.findGCD(-9,6));
    }
    @Test
    void findGCD_07(){
        assertEquals(12, Question24.findGCD(-12,-24));
    }
    @Test
    void findGCD_08(){
        assertEquals(1, Question24.findGCD(1,1));
    }
    @Test
    void findGCD_09(){
        assertEquals(97, Question24.findGCD(97,194));
    }
    @Test
    void findGCD_10(){
        assertEquals(2147483647, Question24.findGCD(2147483647,2147483647));
    }

}
