class AddBorder{
    String[] addBorder(String[] picture) {
        String[] result = new String[picture.length + 2];
        String edges = "*".repeat(picture[0].length() + 2);
        result[0] = edges;
        for (int i = 0; i < picture.length; i++){
            result[i+1] = "*" + picture[i] + "*";    
        }
        result[result.length-1] = edges;
        return result;
    }
}