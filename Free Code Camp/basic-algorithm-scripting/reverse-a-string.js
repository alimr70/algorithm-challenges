/* -------------------------------------------------------------------------- */
/*                                 DESCRIPTION                                */
/* -------------------------------------------------------------------------- */

/**
 * Reverse a StringPassed
 * 
 * Reverse the provided string.
 * You may need to turn the string into an array before you can reverse it.
 * Your result must be a string.

 */

/* -------------------------------------------------------------------------- */
/*                                    TESTS                                   */
/* -------------------------------------------------------------------------- */

/**
 * reverseString("hello") should return a string.
 * reverseString("hello") should return the string olleh.
 * reverseString("Howdy") should return the string ydwoH.
 * reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.
 */

/* -------------------------------------------------------------------------- */
/*                                  SOLUTION                                  */
/* -------------------------------------------------------------------------- */

function reverseString(str) {
  let newStr = [];
  for (let i = 0; i <= str.length - 1; i++) {
    newStr.unshift(str[i]);
  }
  str = newStr.toString().replaceAll(",", "");
  return str;
}

console.log(reverseString("hello"));