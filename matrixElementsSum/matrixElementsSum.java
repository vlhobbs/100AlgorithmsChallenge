import java.io.*;
import java.util.*;

class matrixElementsSum{

public static int getElementsSum(int[][] matrix) {
    ArrayList<Integer> exclusion = new ArrayList<Integer>();
    int total = 0;
    for (int i = 0; i < matrix.length; i++){
        for (int j = 0; j < matrix[i].length; j++){
            if (!(exclusion.contains(j))){
                total += matrix[i][j];
                if (matrix[i][j] == 0){
                    exclusion.add((Integer)j);
                }
            }
        }
    }
    return total;
}

public static void main(String[] args){
    int[][] test = {{1,0,1},{1,5,3},{0,4,0}};
    System.out.println(getElementsSum(test));
    }



}