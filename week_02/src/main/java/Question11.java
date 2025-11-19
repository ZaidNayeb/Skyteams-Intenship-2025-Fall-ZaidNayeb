/*
Autor  = Zaid Nayeb
Date   = 17/11/2025

11.	Simple Calculator using switch-case
Description: Input two numbers and an operator (+, -, *, /) and compute the result.
Example: Input:
5, 3, +
Output:
8

 */
public class Question11 {
    public static double calculator(double a, double b, char c){
        double result = 0;
        switch (c){
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
        }
        return result;
    }
}
