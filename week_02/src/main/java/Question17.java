/*
Autor  = Zaid Nayeb
Date   = 18/11/2025

17.	Sum of first N natural numbers
Description: Calculate and print the sum using a loop.
Example:
Input:   5
Output:  15
*/
public class Question17 {
    public static int sumOfNum(int n) {
        int sum = 0;
        if (n <= 0) {
            return -1;
        } else {
            for (int i = 1; i <= n; i++) {
                sum += i;
            }
        }
        return sum;
    }

}
