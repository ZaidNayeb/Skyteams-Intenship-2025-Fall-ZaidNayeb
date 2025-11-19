/*
Autor  = Zaid Nayeb
Date   = 18/11/2025

18.	Multiplication table of a number
Description: Print the multiplication table for a given number (up to 10 or N).
Example:
Input:
5
Output:
5 × 1 = 5
5 × 2 = 10
…
5 × 10 = 50

*/
public class Question18 {
    public static void main(String[] args) {
        multiTable(5,10);
    }
    public static void multiTable(int n, int m){
        for (int i = 1; i <= m; i++){
            System.out.println(n + " * " + i + " = "+ (i*n));
        }
    }
}
