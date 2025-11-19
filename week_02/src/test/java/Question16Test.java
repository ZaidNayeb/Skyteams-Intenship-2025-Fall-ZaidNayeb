import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question16Test {
    @Test
    void printNumbers() {
        assertTrue(Question16.printNumbers().startsWith("1, 2, 3"));
    }

    @Test
    void printNumbers_02(){
        assertTrue( Question16.printNumbers().endsWith("100"));
    }

    @Test
    void printNumbers_03(){
        String [] splits = Question16.printNumbers().split(",");
        assertEquals(100, splits.length);
    }


}
