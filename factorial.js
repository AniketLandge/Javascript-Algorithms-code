//factorial of given number
//Example: factorial of 5 = 5*4*3*2*1 = 120

const factorial = (number) => {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        console.log(i);
        factorial = factorial * i;
    }
    return factorial;
};

const result = factorial(5);
console.log(result);

//Big-0 = O(n)
