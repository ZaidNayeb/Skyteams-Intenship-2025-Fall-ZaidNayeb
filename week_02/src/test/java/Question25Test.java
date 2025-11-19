import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question25Test {
    @Test
    void findLCM_01(){
        assertEquals(36, Question25.findCLM(12,18));
    }

    @Test
    void findLCM_02(){
        assertEquals(20, Question25.findCLM(4,5));
    }

    @Test
    void findLCM_03(){
        assertEquals(0, Question25.findCLM(0,7));   // LCM(0,x) = 0 (standard definition)
    }

    @Test
    void findLCM_04(){
        assertEquals(24, Question25.findCLM(6,8));
    }

    @Test
    void findLCM_05(){
        assertEquals(30, Question25.findCLM(10,15));
    }

    @Test
    void findLCM_06(){
        assertEquals(21, Question25.findCLM(3,7));
    }

    @Test
    void findLCM_07(){
        assertEquals(36, Question25.findCLM(-12,18));
    }

    @Test
    void findLCM_08(){
        assertEquals(12, Question25.findCLM(-3,-12));
    }

    @Test
    void findLCM_09(){
        assertEquals(97, Question25.findCLM(97,97));
    }

    @Test
    void findLCM_10(){
        assertEquals(2147483647, Question25.findCLM(214748364,214748364));
    }

}
