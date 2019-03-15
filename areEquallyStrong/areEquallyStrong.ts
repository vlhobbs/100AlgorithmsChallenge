function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    let yourArms: number[] = [yourLeft, yourRight];
    yourArms.sort((a,b)=>a-b); 
    let friendArms: number[] = [friendsLeft, friendsRight];
    friendArms.sort((a,b)=>a-b);
    if (yourArms[0] == friendArms[0] && yourArms[1] == friendArms[1]){
        return true;
    }
    else{
        return false;
    }
}

//arr.sort((a,b)=>a-b);

//I keep forgetting the method to lexographically sort...
 console.log(areEquallyStrong(10, 15, 15, 10))
 console.log(areEquallyStrong(15, 10, 15, 10))
 console.log(areEquallyStrong(15, 10, 15, 9))


/*
First two inputs are you
Second two inputs are your friend
let yourArms: number[] = [yourLeft, yourRight];
let friendArms: number[] = [friendsLeft, friendsRight];
Sort both arrays and compare
If they are equal, then return true



*/