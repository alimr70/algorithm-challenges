/* -------------------------------------------------------------------------- */
/*                                 DESCRIPTION                                */
/* -------------------------------------------------------------------------- */

/**
 * Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

 */

/* -------------------------------------------------------------------------- */
/*                                    TESTS                                   */
/* -------------------------------------------------------------------------- */

/**
 * sumFibs(1) should return a number.

sumFibs(1000) should return 1785.

sumFibs(4000000) should return 4613732.

sumFibs(4) should return 5.

sumFibs(75024) should return 60696.

sumFibs(75025) should return 135721.
 */

/* -------------------------------------------------------------------------- */
/*                                  SOLUTION                                  */
/* -------------------------------------------------------------------------- */
const getFibNums = (arr, num) => {
  if (arr[arr.length - 1] > num) {
    arr.pop();
    return arr;
  }
  arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  return getFibNums(arr, num);
}

function sumFibs(num) {
  let fullFibNums = getFibNums([1, 1], num);
  let oddFibNums = fullFibNums.filter(el => el % 2 !== 0);
  let sumFibs = oddFibNums.reduce((prev, current) => prev + current);
  return sumFibs;
}

console.log(sumFibs(1))
console.log(sumFibs(1000))
console.log(sumFibs(4000000))
console.log(sumFibs(4))
console.log(sumFibs(75024))
console.log(sumFibs(75025))