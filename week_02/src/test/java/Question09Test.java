import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question09Test {
    @Test
    void gradeCalculator_01(){
        assertEquals("F", Question09.gradeCalculator(50));
    }
    @Test
    void gradeCalculator_02(){
        assertEquals("D", Question09.gradeCalculator(61));
    }
    @Test
    void gradeCalculator_03(){
        assertEquals("C", Question09.gradeCalculator(71));
    }
    @Test
    void gradeCalculator_04(){
        assertEquals("B", Question09.gradeCalculator(81));
    }
    @Test
    void gradeCalculator(){
        assertEquals("A", Question09.gradeCalculator(90));
    }


}
