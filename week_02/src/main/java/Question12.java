/*
Autor  = Zaid Nayeb
Date   = 17/11/2025

12.	Traffic Light System using switch-case
Description: Input a color (Red, Yellow, Green) and display an action (Stop, Ready, Go).
Example: Input:
Green Output:
Go
 */
public class Question12 {
    public static void main(String[] args) {
        System.out.println(trafficLight("green"));
    }
    public static String trafficLight(String color){
        color = color.toLowerCase().trim();
        color = Character.toUpperCase(color.charAt(0)) + color.substring(1);
        String result = "";
        switch (color){
            case "Red":
                result = "Stop";
                break;
            case "red":
                result ="Stop";
                break;
            case "Yellow":
                result ="Ready";
                break;
            case "yellow":
                result = "Ready";
                break;
            case "Green":
                result ="Go";
            break;
            case "green":
                result ="Go";
                break;
        }
        return result;
    }
}
