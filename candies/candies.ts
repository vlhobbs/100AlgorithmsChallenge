function candies(n: number, m: number): number {
    return (~~(m/n)) * n;
}

console.log(candies(2, 5));
console.log(candies(3, 10));