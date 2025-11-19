//Autor : Zaid Nayeb
//Date  : 1404/08/26

//Leap Year Checker
//Description: Determine if a given year is a leap year.
//Rule: Year divisible by 4 → leap year, except centuries not divisible by 400.
//Example:
// Input: 2000 Output: Leap year
// Input: 1900 Output: Not leap year


public class Question10 {
    public static String leapYear(int year){
       if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)){
           return "Leap Year";
        }else {
           return "Not Leap Year";
       }

    }
}
