function findEmailDomain(address: string): string {

    let lastAt:number = address.lastIndexOf("@");
    console.log (lastAt);
    let domain:string = address.slice(lastAt+1);

    return domain;

}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
