/*
Author = Zaid Nayeb
Date   = 18/11/2025

22.	Print even numbers in a range
Description: Input start and end values, print all even numbers between them.
Example:
 Input: 1, 10
Output: 2, 4, 6, 8, 10

*/
public class Question22 {
    public static String printEven(int a, int b){
        StringBuilder numbers = new StringBuilder();
        for (int i = a; i <= b; i++){
            if ( i % 2 == 0 ){
                numbers.append(i);
                if (i < b ){
                    numbers.append(", ");
                }
            }
        }
        return numbers.toString();
    }
}
