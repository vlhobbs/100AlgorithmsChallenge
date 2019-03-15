import java.util.*;
import java.io.*;

class almostIncreasingSequence{
    
    //this fails on 100000 item array test
    //I need to try out another way
    /*    public static boolean isAlmostIncreasing(int[] arr){
        int outOfSync = 0;
        for (int i = 1; i < arr.length - 1; i++){
            if ((arr[i] <= arr[i-1]) || (arr[i] >= arr[i+1])){
                outOfSync++;
            }
        }
        return (outOfSync <= 1);
    }
    */
    
    public static boolean isAlmostIncreasing(int[] sequence){
        int outOfSync = 0;
        int index = 0; 
        while (index < sequence.length - 1){
            if (sequence[index] < sequence[index + 1]){
                index++;
                continue; 
                //continue basically just continues the if loop and skips that stuff below
                //if everything is in sequence so far
            }
            else {
                outOfSync++;
                if (index > 0 &&
                    index + 2 < sequence.length &&
                    sequence[index + 1] <= sequence[index - 1] &&
                    sequence[index + 2] <= sequence[index]){
                    outOfSync++;
                }
                else { 
                    index++;
                }
                //once it finds one error, it looks for the next. If found it returns false
                //and if not found it goes back to the while loop. It has to include logic
                //for the indices b/c an out-of-bounds error crashes it all.
            }
            if (outOfSync > 1){ 
                return false;
            }
        }
        return true;
    }
    
    
    
    public static void main(String[] args){
        int[] test1 = {1,2,3,2};
        int[] test2 = {1,3,2,1};
        System.out.println(isAlmostIncreasing(test1));
        System.out.println(isAlmostIncreasing(test2));
    }
}