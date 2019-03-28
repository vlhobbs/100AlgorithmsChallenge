function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
  let plantHeight: number = upSpeed; //starting height on day one is the amount it grows, it will shrink after
  let day: number = 1;
  
  while (plantHeight < desiredHeight){
    plantHeight = plantHeight + upSpeed - downSpeed;
    day++;
  }
  
  return day;
}

console.log(growingPlant(100, 10, 910))
console.log(growingPlant(30, 20, 40))
