//fibonnaci series
//0,1,2,3,5,8

const fibonacci = (n) => {
    let startArr = [0, 1];
    for (let i = 2; i < n; i++) {
        startArr[i] = startArr[i - 1] + startArr[i - 2];
    }
    return startArr;
};

const result = fibonacci(7);

console.log(result);

//time complexity is O(n)
