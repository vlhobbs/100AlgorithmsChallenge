function fancyRide(l: number, fares: number[]): string {
  //fares.length - 1 is used b/c I don't like hardcoding numbers as a rule
  //Would allow us to pass in other arrays later
  let uberTypes:string[] = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"]
  let credit:number = 20; //making a var so that I can make it an input later
  //iterate from top down - there are always fares[0] through fares[4]
  for(let i = fares.length - 1; i>=0; i--){
    if (!((fares[i] * l) > credit))
    return uberTypes[i];
  }

}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));