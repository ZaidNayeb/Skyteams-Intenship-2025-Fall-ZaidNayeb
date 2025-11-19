import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question13Test {
    @Test
    void monthInfo_01(){
        assertEquals("January, 31 days.", Question13.monthInfo(1));
    }
    @Test
    void monthInfo_02(){
        assertEquals("February, 28 or 29 days.", Question13.monthInfo(2));
    }
    @Test
    void monthInfo_03() {
        assertEquals("April, 30 days.", Question13.monthInfo(4));
    }
    @Test
    void monthInfo_04() {
        assertEquals("December, 31 days.", Question13.monthInfo(12));
    }
    @Test
    void monthInfo_05() {
        assertEquals("Invalid month",Question13.monthInfo(0));
    }
    @Test
    void monthInfo_06() {
        assertThrows(IllegalArgumentException.class,
                () -> Question13.monthInfo(13));
    }





}
