let input = prompt("Masukan Angka");

function isPrime(num) {
  if (num < 2 || !Number.isInteger(num)) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < input; i++) {
  if (isPrime(i)) {
    document.write(`${i} `);
  }
}