function calculateSquareRootOfSumOfSquares(numbers) {
    const sumOfSquares = numbers.reduce((total, number) => total + Math.pow(number, 2), 0);
    const squareRoot = Math.sqrt(sumOfSquares);
    return squareRoot;
  }function displaySquareRootOfSumOfSquares(numbers) {
    const result = calculateSquareRootOfSumOfSquares(numbers);
    console.log('The square root of the sum of squares is: ' + result);
  }const numbers = [2, 3, 4, 5];
  console.log(calculateSquareRootOfSumOfSquares(numbers));displaySquareRootOfSumOfSquares(numbers)
  