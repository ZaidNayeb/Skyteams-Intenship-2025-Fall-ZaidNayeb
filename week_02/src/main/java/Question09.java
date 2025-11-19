//Autor : Zaid Nayeb
//Date  : 1404/08/26

//Grade Calculator (0–100 → A–F)
//Description: Input a student’s marks (0–100) and print the grade based on a scale.
//Example:
//Input: 85
// Output:B

public class Question09 {
    public static String gradeCalculator(double score){
        if (score < 60){
            return "F";
        }else if (score < 70){
            return "D";
        }else if (score < 80){
            return "C";
        }else if (score < 90){
            return "B";
        }else {
            return "A";
        }
    }
}
