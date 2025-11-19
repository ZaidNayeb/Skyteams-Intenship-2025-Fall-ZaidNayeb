/*
Autor  = Zaid Nayeb
Date   = 18/11/2025

16.	Print numbers from 1 to 100
Description: Use a loop to print num\bers sequentially.
Example:
Output:
1, 2, 3, …, 100

*/

public class Question16 {
    public static void main(String[] args) {
        System.out.println(printNumbers());
    }
    public static String printNumbers(){
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= 100; i++){
            sb.append(i);
            if (i < 100){
                sb.append(", ");
            }
        }
        return sb.toString();
    }
}
