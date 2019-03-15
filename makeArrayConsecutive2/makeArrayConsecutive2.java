import java.util.*;
import java.io.*;

class makeArrayConsecutive2{
    
    public static int addNumToMakeConsecutive(int[] statues) {
        int statCount = 0;
        Arrays.sort(statues);
        for (int val = statues[0] + 1; val < statues[statues.length - 1]; val++){
            if (!contains(val, statues)){
                statCount++;
            }
        }
        return statCount;
    }    
    //Java doesn't have an easy built-in to find elements like JS/TS
    //so I wrote a helper function of my own. I will save this for
    //later since I'm sure I'll need it again.

    public static boolean contains(int testInt, int[] arr){
        boolean doesContain = false;
        for (int i = 0; i < arr.length; i++)
        if (arr[i] == testInt){
            doesContain = true;
        }
        return doesContain;
    }
    public static void main (String[] args){
        int[] test1 = new int[]{6,2,3,8};
        int[] test2 = new int[]{1,10};
        System.out.println(addNumToMakeConsecutive(test1));
        System.out.println(addNumToMakeConsecutive(test2));
    }
    
}
