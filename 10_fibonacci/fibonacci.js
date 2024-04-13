const generateFibonacci = function(n) {
    const fibonacciArray = [0, 1]; // Initialize with the first two Fibonacci numbers
  
    for (let i = 2; i < n; i++) {
      const nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
      fibonacciArray.push(nextFibonacci);
    }
  
    return fibonacciArray;
  }


const fibonacci = function(a) {
    let b = generateFibonacci(200);
    if(Number(a) >= 0) {
        return b[a]; 
    } else {
        return "OOPS";
    }
}
// Do not edit below this line
module.exports = fibonacci;
