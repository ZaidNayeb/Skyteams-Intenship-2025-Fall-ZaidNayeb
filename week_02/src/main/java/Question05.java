//Simple and Compound interest
public class Question05 {

    public static double simpleInterest(double principle, double rate, double time){
        return (principle * rate * time) / 100;
    }

    public static double compoundInterest(double principle, double rate, double time){
        return principle *( Math.pow(1 + rate / 100, time) -1);
    }
}
