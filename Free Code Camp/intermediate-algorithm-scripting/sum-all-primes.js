/* -------------------------------------------------------------------------- */
/*                                 DESCRIPTION                                */
/* -------------------------------------------------------------------------- */

/**
 * Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 */

/* -------------------------------------------------------------------------- */
/*                                    TESTS                                   */
/* -------------------------------------------------------------------------- */

/**
 * sumPrimes(10) should return a number.

sumPrimes(10) should return 17.

sumPrimes(977) should return 73156.
 */

/* -------------------------------------------------------------------------- */
/*                                  SOLUTION                                  */
/* -------------------------------------------------------------------------- */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range
// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

const getNumMultiples = (num, maxNum) => {
  let multiples = [];
  for (let i = num; i <= maxNum; i += num) {
    multiples.push(i);
  }
  multiples.shift()
  return multiples;
}

const removeMultiples = (rangeArr) => {
  // stop it there only one element
  if (rangeArr.length === 1) return rangeArr;
  // remove first element multiples
  let multiples = getNumMultiples(rangeArr[0], rangeArr[rangeArr.length - 1]);
  let filteredRange = rangeArr.filter(el => !multiples.includes(el));
  // make recursion without the first element
  filteredRange.shift();
  return [rangeArr[0]].concat(removeMultiples(filteredRange));
}

function sumPrimes(num) {
  let numRange = range(2, num, 1);
  let filteredNumRang = removeMultiples(numRange);
  return filteredNumRang.reduce((prev, current) => prev + current);
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));