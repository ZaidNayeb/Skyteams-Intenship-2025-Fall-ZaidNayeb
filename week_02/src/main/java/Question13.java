/*
Autor  = Zaid Nayeb
Date   = 17/11/2025

13.	Month name & number of days using switch-case
Description: Input a month number (1–12) and display its name and number of days. Example:
Input:
2
Output:
February, 28 or 29 days
*/
public class Question13 {
    public static String monthInfo(int num){
        if (num < 1 || num > 12){
            throw new IllegalArgumentException("Invalid month");
        }
        String show = "";
        switch (num){
            case 1:
                show = "January, 31 days.";
                break;
            case 2:
                show = "February, 28 or 29 days.";
                break;
            case 3:
                show = "March, 31 days.";
                break;
            case 4:
                show = "April, 30 days.";
                break;
            case 5:
                show = "May, 31 days.";
                break;
            case 6:
                show = "June, 30 days.";
                break;
            case 7:
                show = "July, 31 days.";
                break;
            case 8:
                show = "August, 31 days.";
                break;
            case 9:
                show = "September, 30 days.";
                break;
            case 10:
                show = "October, 31 days.";
                break;
            case 11:
                show = "November, 30 days.";
                break;
            case 12:
                show = "December, 31 days.";
                break;


        }
        return show;
    }
}
