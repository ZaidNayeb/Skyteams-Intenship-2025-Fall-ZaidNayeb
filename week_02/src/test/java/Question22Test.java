import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question22Test {
    @Test
    void printEven_01(){
        assertEquals("2, 4, 6, 8, 10", Question22.printEven(1,10));
    }
    @Test
    void printEven_02(){
        assertTrue(Question22.printEven(1,10).startsWith("2"));
    }
    @Test
    void printEven_03(){
        String [] n = Question22.printEven(1,10).split(" ");
        assertEquals(5,n.length);
    }
    @Test
    void printEven_04(){
        assertTrue(Question22.printEven(1,10).endsWith("10"));
    }
    @Test
    void printEven_05(){
        assertEquals("", Question22.printEven(3,3)); // 3 is odd
    }
    @Test
    void printEven_06(){
        assertEquals("4", Question22.printEven(4,4)); // Only 4 is in range and even
    }
    @Test
    void printEven_07(){
        assertEquals("-4, -2, 0, 2, ", Question22.printEven(-5,3));
    }
    @Test
    void printEven_08(){
        assertEquals("2, 4, 6, 8, 10",Question22.printEven(10,1));
    }
}
