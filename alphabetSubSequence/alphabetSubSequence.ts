function alphabetSubsequence(s: string): boolean {
    for (let index = 1; index < s.length; index++){
        if (s.charCodeAt(index) <= s.charCodeAt(index - 1)){
            return false;
        }
    }
    return true;

}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))

//stringArray[index].charCodeAt(0)