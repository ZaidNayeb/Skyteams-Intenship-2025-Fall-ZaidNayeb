/*
Author = Zaid Nayeb
Date   = 18/11/2025

 19. Reverse a number
Description: Reverse the digits of an integer.
Example: Input:
1234 Output:
4321

*/

public class Question19 {
    public static void main(String[] args) {
        System.out.println(reverseNumber(-456));
    }

    public static long reverseNumber(long num){
        long reverse = 0;
        if (num < 0){
            num *= -1;
            while(num > 0){
                reverse += (num % 10) ;
                if (num >10) {
                    reverse *= 10;
                }
                num /= 10;
            }
            reverse *= -1;
            return reverse;

        }else{
            while(num > 0){
                reverse += (num % 10) ;
                if (num >10) {
                    reverse *= 10;
                }
                num /= 10;
            }
        return reverse;
        }
    }
}
