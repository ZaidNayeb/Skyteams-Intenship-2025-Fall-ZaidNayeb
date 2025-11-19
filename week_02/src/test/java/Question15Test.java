import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Question15Test {
    @Test
    void triangleCheck_01(){
        assertEquals("Valid Triangle, Scalene", Question15.triangleType(3,4,5));
    }
    @Test
    void triangleCheck_02() {
        assertEquals("Valid Triangle, Equilateral", Question15.triangleType(5,5,5));
    }
    @Test
    void triangleCheck_03() {
        assertEquals("Valid Triangle, Isosceles", Question15.triangleType(7,7,4));
    }
    @Test
    void triangleCheck_04() {
        assertEquals("Not a Triangle", Question15.triangleType(0, 5, 5));
    }
    @Test
    void triangleCheck_05() {
        assertEquals("Not a Triangle", Question15.triangleType(-3, 4, 5));
    }
    @Test
    void triangleCheck_06() {
        assertEquals("Valid Triangle, Isosceles", Question15.triangleType(6,4,6));
    }
    @Test
    void triangleCheck_07() {
        assertEquals("Valid Triangle, Scalene", Question15.triangleType(8,9,10));
    }





}
