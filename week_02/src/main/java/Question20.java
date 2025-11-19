/*
Author = Zaid Nayeb
Date   = 18/11/2025

 20. Count digits of a number
Description: Find how many digits are in a number.
Example: Input:
786
Output:
3

*/
public class Question20 {
    public static int countDigits(int number){
        if (number < 0){
            number *= -1;
        }
        int digits = 0;
        while (number > 0){
            number /= 10;
            digits++;
        }
        return digits;
    }
}
