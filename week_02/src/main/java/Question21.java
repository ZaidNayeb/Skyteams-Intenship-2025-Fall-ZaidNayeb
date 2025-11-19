/*
Author = Zaid Nayeb
Date   = 18/11/2025

 21. Sum of digits
Description: Calculate the sum of all digits of a number.
Example:
 Input: 123
 Output: 6

*/
public class Question21 {
    public static void main(String[] args) {
        System.out.println(sumDigit(1234));
    }
    public static int sumDigit(int n){
        String number = n +"";
        int sum = 0;
            String [] num = number.split("");
            int [] digits = new int[num.length];
            for (int i = 0; i < num.length; i++){
                digits[i] = Integer.parseInt(num[i]);
                sum += digits[i];
            }

        return sum;
    }
}
