import java.util.*;
import java.io.*;

class allLongestStrings{

    public static String[] getLongestStrings(String[] inputArray) {
        int largest = 0;
        ArrayList<String> longest = new ArrayList<String>();
        for (int index = 0; index < inputArray.length; index++){
            if (inputArray[index].length() > largest){
                largest=inputArray[index].length();
            }
        }        
        for (int i = 0; i<inputArray.length; i++){
            if (inputArray[i].length() == largest){
                longest.add(inputArray[i]);
            }
        }
        String[] results = new String[longest.size()];
        results = longest.toArray(results);
        return results;    
    }

    public static void main (String[] args){
        String[] test1 = {"bob", "joe", "lu", "hal"};
        String[] newArray = getLongestStrings(test1);
        for (int i = 0; i < newArray.length; i++){
            System.out.println(newArray[i]);
        }
    }
}


/*
Biggest difference is Java's treatment of Arrays.
Using an ArrayList to store the items and then converting to
an array was the easiest way - but my first attempt, I had 
trouble getting rid of the null objects if I declared the array
ahead of time w/ length of original array. Best way to fix it:
- Declare ArrayList and two ints - one for the longest #
  and one for the number of longest values
- Iterate to get length of longest String
- Iterate again, push longest strings to ArrayList and save
  number of those items
- Create a new array with the numLargest value and then 
  use the toArray method to convert to a return array
(I have since edited to use the ArrayList length method instead)


*/