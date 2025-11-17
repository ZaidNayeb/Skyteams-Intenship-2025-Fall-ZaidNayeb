
/*
 2.	Find the largest and smallest of three numbers
Description: Read three integers and print the largest and smallest.
 */

public class Question02 {
    public static void main(String[] args) {
        System.out.println(largest(35, 48, -89));
        System.out.println(smallest(35,48,-89));
    }

    public static double largest(double a, double b, double c) {
        double largest = Double.NEGATIVE_INFINITY;
        double [] numbers = {a, b, c};
        for (double n : numbers){
            if (n > largest) largest = n;
        }
        return largest;
    }
    public static double smallest(double a, double b, double c) {
        double smallest = Double.POSITIVE_INFINITY;
        double[] numbers ={a, b, c};
        for (double n : numbers){
            if (n < smallest) smallest = n;
        }
        return smallest;
    }

}

