//Author : Zaid Nayeb
//Date  :  17/11/2025

/*
Question
1. Swap two variables without using a temporary variable
Description: Write a program to swap the values of two variables (e.g., a and b) without using a third variable.
Example:
Input:  a = 5, b = 10
Output: a = 10, b = 5
 */
public class Question01 {

    public static String swapVariable(int a, int b){
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;

//       a = a + b;
//       b = a - b;
//       a = a - b;
        return "a = "+ a + " b = " + b;
    }
}
