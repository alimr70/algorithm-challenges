/* -------------------------------------------------------------------------- */
/*                                 DESCRIPTION                                */
/* -------------------------------------------------------------------------- */

/**
 * Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 */

/* -------------------------------------------------------------------------- */
/*                                    TESTS                                   */
/* -------------------------------------------------------------------------- */

/**
 * smallestCommons([1, 5]) should return a number.

smallestCommons([1, 5]) should return 60.

smallestCommons([5, 1]) should return 60.

smallestCommons([2, 10]) should return 2520.

smallestCommons([1, 13]) should return 360360.

smallestCommons([23, 18]) should return 6056820.
 */

/* -------------------------------------------------------------------------- */
/*                                  SOLUTION                                  */
/* -------------------------------------------------------------------------- */

// const getGreatesCommonDivisor = (smallNum, bigNum) => {
//   let remainder = bigNum % smallNum;
//   return remainder === 0 ? smallNum : getGreatesCommonDivisor(remainder, smallNum);
// }

// const getLeastCommonMultiple = (smallNum, bigNum) => {
//   let gcd = getGreatesCommonDivisor(smallNum, bigNum);
//   let lcm = (smallNum * bigNum) / gcd;
//   return lcm;
// }

// const getAllLeastCommonMultiples = (arr) => {
//   let smallNum = arr[arr.length - 2];
//   let bigNum = arr[arr.length - 1];
//   if (arr.length === 2) return getLeastCommonMultiple(smallNum, bigNum);
//   let lastTwoNumsLeastCommonMultiple = getLeastCommonMultiple(smallNum, bigNum);
//   arr.pop();
//   return [lastTwoNumsLeastCommonMultiple].concat(getAllLeastCommonMultiples(arr));
// }

const sortArr = (arr) => {
  let sorted = arr.sort((a, b) => (a > b ? 1 : -1));
  return sorted;
}

const getRangeOfNumbers = (arr) => {
  let range = [];
  for (let i = arr[0]; i <= arr[1]; i++) { range.push(i); };
  return range;
}

// const getSmallestCommon = (arr, num) => {
//   !num ? num = arr[arr.length - 1] : num;
//   return arr.filter(el => num % el === 0).length === arr.length ? num : getSmallestCommon(arr, num + arr[arr.length - 1])
// }

const getSmallestCommon = (arr) => {
  let num = arr[arr.length - 1];
  while (arr.filter(el => num % el === 0).length !== arr.length) {
    num += arr[arr.length - 1];
  }
  return num;
}

function smallestCommons(arr) {
  let sortedArr = sortArr(arr);
  let rangedArr = getRangeOfNumbers(sortedArr);
  let smallestCommon = getSmallestCommon(rangedArr);
  return smallestCommon;
}


console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([8, 13]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));