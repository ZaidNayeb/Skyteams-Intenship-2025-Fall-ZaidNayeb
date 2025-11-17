import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class Question04Test {
    @Test
    void CTF_01(){
        assertEquals(77, Question04.CelsiusToFahrenheit(25));
    }
    @Test
    void CTF_02() {
        assertEquals(32, Question04.CelsiusToFahrenheit(0));
    }
    @Test
    void CTF_03() {
        assertEquals(212, Question04.CelsiusToFahrenheit(100));
    }
    @Test
    void CTF_04_negativeTemperature() {
        assertEquals(5, Question04.CelsiusToFahrenheit(-15)); // (-15*1.8)+32 = -27+32=5
    }
    @Test
    void CTF_05_minusForty() {
        assertEquals(-40, Question04.CelsiusToFahrenheit(-40));
    }
    @Test
    void FTC_01(){
        assertEquals(25, Question04.FahrenheitToCelsius(77));
    }
    @Test
    void FTC_02_freezingPoint() {
        assertEquals(0, Question04.FahrenheitToCelsius(32));
    }
    @Test
    void FTC_03_boilingPoint() {
        assertEquals(100, Question04.FahrenheitToCelsius(212));
    }
    @Test
    void FTC_04_negativeTemperature() {
        assertEquals(-20, Question04.FahrenheitToCelsius(-4));
    }
    @Test
    void FTC_05_minusForty() {
        assertEquals(-40, Question04.FahrenheitToCelsius(-40));
    }
}
