//Autor : Zaid Nayeb
//Date  : 1404/08/26

//Question:
//Determine if a number is positive, negative, or zero Description: Use if-else statements to categorize a number.
//Example:
//Input:
//-3
//Output:
//Negative

public class Question08 {

    public static String checkNumber(double number){
        if (number > 0) {
            return "Positive";
        }else if (number < 0) {
            return "Negative";
        } else {
            return "Zero";
        }
    }
}
