import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question12Test {
    @Test
    void trafficLight(){
        assertEquals("Go", Question12.trafficLight("Green"));
    }
    @Test
    void trafficLight_02() {
        assertEquals("Go", Question12.trafficLight("green"));
    }
    @Test
    void trafficLight_03() {
        assertEquals("Ready", Question12.trafficLight("Yellow"));
    }
    @Test
    void trafficLight_04() {
        assertEquals("Stop", Question12.trafficLight("Red"));
    }
    @Test
    void trafficLight_06() {
        assertEquals("Go", Question12.trafficLight("GrEeN"));
    }
    @Test
    void trafficLight_07() {
        assertEquals("Go", Question12.trafficLight("  Green  "));
    }





}
