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

        int sum = 0;
        if (n < 0){
            n *= -1;
            String number = n +"";
            String [] num = number.split("");
            int [] digits = new int[num.length];

            for (int i = 0; i < num.length; i++){
                digits[i] = Integer.parseInt(num[i]);
                sum += digits[i];
            }
            return sum * -1;
        }else{
            String number = n +"";
            String [] num = number.split("");
            int [] digits = new int[num.length];

                for (int i = 0; i < num.length; i++){
                    digits[i] = Integer.parseInt(num[i]);
                    sum += digits[i];
                }
            }
        return sum;
    }
}
