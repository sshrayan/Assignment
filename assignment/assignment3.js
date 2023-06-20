function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }console.log(isPrime(13));
  
  function checkIfPrime(number) {
    if (isPrime(number)) {
      console.log(number + ' is a prime number.');
    } else {
      console.log(number + ' is not a prime number.');
    }
  }
  checkIfPrime(13);
  