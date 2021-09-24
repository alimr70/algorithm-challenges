/* -------------------------------------------------------------------------- */
/*                                 DESCRIPTION                                */
/* -------------------------------------------------------------------------- */

/**
 * Sum All Numbers in a RangePassed
 * 
 * We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
 * 
 * For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 */

/* -------------------------------------------------------------------------- */
/*                                    TESTS                                   */
/* -------------------------------------------------------------------------- */

/**
 * sumAll([1, 4]) should return a number.
 * sumAll([1, 4]) should return 10.
 * sumAll([4, 1]) should return 10.
 * sumAll([5, 10]) should return 45.
 * sumAll([10, 5]) should return 45.
 */

/* -------------------------------------------------------------------------- */
/*                                  SOLUTION                                  */
/* -------------------------------------------------------------------------- */

function sumAll(arr) {
  arr.sort((a, b) => { return a >= b ? 1 : -1 });
  const getSumAllNumbersInRange = (n1, n2) => {
    if (n1 === n2) return n1;
    return n1 + getSumAllNumbersInRange(n1 + 1, n2);
  }
  return getSumAllNumbersInRange(arr[0], arr[1]);
}

console.log(sumAll([10, 5]));