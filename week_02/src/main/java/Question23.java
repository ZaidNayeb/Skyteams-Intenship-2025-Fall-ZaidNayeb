import java.util.*;

/*
Author = Zaid Nayeb
Date   = 18/11/2025

23.	Fibonacci series up to N terms
Description: Generate the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8…) up to N terms.
Example:
Input:
7
Output:
0, 1, 1, 2, 3, 5, 8


*/
public class Question23 {
    public static void main(String[] args) {
        System.out.println(fibonacci(20));;
    }
    public static String fibonacci(int n){
       if (n < 0)  return "";
       if (n == 0) return "0";

       List<Integer> fib = new ArrayList<>(List.of(0,1));
       int index = 1;
        while (index < n){
            int prev = fib.get(index - 1);
            int curr = fib.get(index);
            int value = prev + curr;
            fib.add(value);
            index++;
//           fib.add(fib.get(fib.size()-1) + fib.get(fib.size()-2));
//           for (int i = 2; i <= n; i++){
//               int valu = (fib.get(i -1 )+ fib.get(i));
//               fib.add(valu)
//           }
        }

        return fib.toString();
    }
}
