/*
Author = Zaid Nayeb
Date   = 19/11/2025

24.	Find GCD of two numbers
Description: Compute the greatest common divisor using repeated subtraction or the Euclidean algorithm.
Example: Input:
12, 18
Output:
6

*/
public class Question25 {
    public static int findCLM(int a, int b){
        if (a < 0) a *= -1;
        if (b < 0) b *= -1;
        if (a == 0 || b == 0) return 0;

        int GCD;
        if (a > b) GCD = b;
            else GCD = a;
        while (a % GCD != 0 || b % GCD != 0){
            GCD--;
        }
        int LCM = (a * b) / GCD;
        return LCM;

    }
}
