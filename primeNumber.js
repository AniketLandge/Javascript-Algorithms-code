//determine given number is prime or not

const isPrime = (num) => {
    //prime no are natural numbers greater than 1
    //hence adding guard clause
    if (num < 2) return false;
    //check if it is divisible by any small no
    //we added i<n, since n always divisible by itself
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

console.time('Execution Time');
console.log(isPrime(1));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(2885555522222444));
console.timeEnd('Execution Time');
//calculate time complexity
//1 loop = O(n)
//this is correct solution but not optimal since given number of size increase iteration also increases

const isPrimeOptimal = (num) => {
    //prime no are natural numbers greater than 1
    //hence adding guard clause
    if (num < 2) return false;
    //check if it is divisible by any small no
    //we added i < Math.sqrt(num),
    //integer larger than square root dont need to be checked because, whenever "n = a*b" one of two factors 'a' and 'b' is less than or equal to square root of 'n'
    //Example: n=24, a=4 and b=6
    //the square root of 24 iss 4.89 hence 4 is less than 4.89
    //so a is less than square root of n
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

console.time('Execution Time Optimal');
console.log(isPrimeOptimal(1));
console.log(isPrimeOptimal(4));
console.log(isPrimeOptimal(5));
console.log(isPrimeOptimal(2885555522222444));
console.timeEnd('Execution Time Optimal');

//calculate time complexity
//1 loop = O(sqrt(n))
