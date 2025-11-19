import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question23Test {
    @Test
    void fibonacci_01() {
        assertEquals("0", Question23.fibonacci(0));
    }
    @Test
    void fibonacci_02() {
        assertEquals("[0, 1]", Question23.fibonacci(1));
    }
    @Test
    void fibonacci_03() {
        assertEquals("[0, 1, 1]", Question23.fibonacci(2));
    }
    @Test
    void fibonacci_04() {
        assertEquals("", Question23.fibonacci(-1));
    }
    @Test
    void fibonacci_05(){
        assertEquals(8, Question23.fibonacci(7).split(" "));
    }



}
