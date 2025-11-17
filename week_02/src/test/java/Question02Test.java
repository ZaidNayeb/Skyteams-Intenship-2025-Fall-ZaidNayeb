

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * Test class for Question 01
 *  Find the largest and smallest number between 3 numbers.
 */
class Question02Test {

    @Test
    void testLargest_01(){
        assertEquals(50, Question02.largest(35,48,50));
    }
    @Test
    void testLargest_02() {
        assertEquals(15, Question02.largest(-5, 0, 15));
    }
    @Test
    void testLargest_03() {
        assertEquals(-3, Question02.largest(-10, -20, -3));
    }
    @Test
    void testLargest_04() {
        assertEquals(30, Question02.largest(30, 30, 30));
    }

    @Test
    void testSmallest_01(){
        assertEquals(10 , Question02.smallest(10,20,30));
    }
    @Test
    void testSmallest_02() {
        assertEquals(5, Question02.smallest(20, 5, 30));
    }
    @Test
    void testSmallest_03() {
        assertEquals(1, Question02.smallest(50, 20, 1));
    }
    @Test
    void testSmallest_04() {
        assertEquals(7, Question02.smallest(7, 7, 7));
    }
    @Test
    void testSmallest_05() {
        assertEquals(10, Question02.smallest(10, 10, 50));
    }
    @Test
    void testSmallest_06() {
        assertEquals(-100, Question02.smallest(-10, -100, -3));
    }







}

