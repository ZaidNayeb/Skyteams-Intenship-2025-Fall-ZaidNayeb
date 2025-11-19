import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question17Test {
    @Test
    void sumOfNum_01(){
        assertEquals(15, Question17.sumOfNum(5));
    }
    @Test
    void sumOfNum_02(){
        assertEquals(-1 , Question17.sumOfNum(0));
    }
    @Test
    void sumOfNum_03(){
        assertEquals(5050, Question17.sumOfNum(100));
    }
}
