//Calculate the area and parameter of a rectangle.

public class Question03 {
    public static void main(String[] args) {
        System.out.println(calculateArea(4,6));
        System.out.println(calculatePerimeter(4,6));
    }
    public static double calculateArea(double length, double width){
       return length * width;
    }
    public static double calculatePerimeter(double length, double width){
        return (length * 2) + (width * 2);
    }
}
