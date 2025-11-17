import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class Question06Test {
    @Test
    void timeConvertor_01(){
        assertEquals("1 hr, 1 min 5 sec", Question06.timeConvertor(3665));
    }
    @Test
    void timeConvertor_02() {
        assertEquals("0 hr, 0 min 0 sec", Question06.timeConvertor(0));
    }
    @Test
    void timeConvertor_03() {
        assertEquals("0 hr, 0 min 45 sec", Question06.timeConvertor(45));
    }
    @Test
    void timeConvertor_04() {
        assertEquals("0 hr, 2 min 0 sec", Question06.timeConvertor(120));
    }
    @Test
    void timeConvertor_05() {
        assertEquals("1 hr, 0 min 0 sec", Question06.timeConvertor(3600));
    }
    @Test
    void timeConvertor_06() {
        assertEquals("2 hr, 30 min 10 sec", Question06.timeConvertor(9010));
    }
    @Test
    void timeConvertor_07() {
        assertEquals("27 hr, 46 min 40 sec", Question06.timeConvertor(100000));
    }

}
