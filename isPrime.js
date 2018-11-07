function isPrime(number) {
  let start = 2;
  while (start <= Math.sqrt(number)) {
    if (number % start < 1) {
      return false;
    }
    start++;
  }
  return true;
}

let x = 100;
console.log(Math.sqrt(x));
console.log(isPrime(x));
