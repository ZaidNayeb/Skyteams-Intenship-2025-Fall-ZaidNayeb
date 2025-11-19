import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question10Test {
    @Test
    void isLeapyear_01(){
        assertEquals("Leap Year", Question10.leapYear(2000));
    }
    @Test
    void isLeapyear_02(){
        assertEquals("Not Leap Year", Question10.leapYear(1900));
    }
    @Test
    void isLeapyear_03(){
        assertEquals("Not Leap Year", Question10.leapYear(2100));
    }
    @Test
    void isLeapyear_04(){
        assertEquals("Leap Year", Question10.leapYear(2400));
    }
    @Test
    void isLeapyear_05(){
        assertEquals("Not Leap Year", Question10.leapYear(1800));
    }
    @Test
    void isLeapyear_06(){
        assertEquals("Not Leap Year", Question10.leapYear(2021));
    }
    @Test
    void isLeapyear_07(){
        assertEquals("Leap Year", Question10.leapYear(1996));
    }
}
