//Seconds -> hours,minutes,seconds
public class Question06 {
    public static void main(String[] args) {
        timeConvertor(3665);
    }
    public static String timeConvertor(int secs){

        int hours  = secs / 3600;
        secs -= hours * 3600;
        int minutes = secs  / 60;
        secs -= minutes * 60;
        int second = secs;
        return hours + " hr, " + minutes + " min "+ second + " sec";
    }
}
