//adjacentElementsProduct.java
//This version is in Java instead of Typescript
//Saving for reference
import java.io.*;
import java.util.*;

class adjacentElementsProduct{
public static int getGreatestProduct(int[] inputArray) {
    int max = 1000;
    int min = -1000;
    int largest = min * max - 1;
    for (int index = 0; index < inputArray.length - 1; index++){
        if (inputArray[index] * inputArray[index + 1] > largest){
            largest = inputArray[index] * inputArray[index + 1];
        }
    }
    return largest;
}
public static void main(String[] args){
    int[] arr = new Array (3, 6, 2, 7, 1, 1, 10);
    adjacentElementsProduct(arr);
}
}