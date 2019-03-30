function firstDigit(inputString: string): string {
  let arrFromString = [...inputString];
  for(let i = 0; i < arrFromString.length; i++){
    if (!(isNaN(Number(arrFromString[i])))){
      return arrFromString[i];
    }
  }
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
