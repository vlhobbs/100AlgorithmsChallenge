//shapeArea.java
//n=x: 1 + 1*4 + 2*4 + ... + (x-1)*4

class shapeArea {

    private static int findShape(int n) {
        if (n == 1){
            return 1;
        }
        else {
            return (n-1)*4 + shapeArea(n-1);
        }
    }

    public static void main (String[] args){
        findShape(25);
        findShape(2);
        findShape(10);
        findShape(66);
    }
}