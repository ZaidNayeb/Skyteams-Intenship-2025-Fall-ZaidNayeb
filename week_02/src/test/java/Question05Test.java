import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question05Test {
    @Test
    void simpleInterest_01(){
        assertEquals(100, Question05.simpleInterest(1000,5,2));
    }
    @Test
    void SI_02() {
        assertEquals(0, Question05.simpleInterest(1000, 0, 5));
    }
    @Test
    void SI_03() {
        assertEquals(0, Question05.simpleInterest(1000, 10, 0));
    }
    @Test
    void SI_04() {
        assertEquals(0, Question05.simpleInterest(0, 12, 3));
    }


    @Test
    void compoundInterest_01(){
        assertEquals(102.5, Question05.compoundInterest(1000,5,2));
    }
    @Test
    void compoundInterest_02() {
        assertEquals(0, Question05.compoundInterest(1000, 0, 5), 0.0001);
    }
    @Test
    void compoundInterest_03() {
        assertEquals(0, Question05.compoundInterest(1000, 10, 0), 0.0001);
    }
    @Test
    void compoundInterest_04() {
        assertEquals(100, Question05.compoundInterest(1000, 10, 1), 0.0001);
    }



}
