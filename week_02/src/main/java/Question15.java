import java.util.ArrayList;
import java.util.List;

/*
Autor  = Zaid Nayeb
Date   = 18/11/2025

15.	Triangle validity and type
Description: Given three sides, determine if they form a valid triangle and if it’s equilateral, isosceles, or scalene.
Rule: Sum of any two sides > third side.
Example: Input:
3, 4, 5
Output:
Valid triangle, Scalene
*/

public class Question15 {
    public static String triangleType(double a, double b, double c) {
        if (a <= 0 || b <= 0 || c <= 0){
            return ("Not a Triangle");
        }else  if (a == b && b == c){
            return "Valid Triangle, Equilateral";
        }else if ((a == b && b !=c && a != c) || (b == c && b != a && c != a) || (c == a && c != b && b != a)){
            return "Valid Triangle, Isosceles";
        }else {
            return "Valid Triangle, Scalene";
        }


    }
}
