/* -------------------------------------------------------------------------- */
/*                                 DESCRIPTION                                */
/* -------------------------------------------------------------------------- */

/**
 *Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
 */

/* -------------------------------------------------------------------------- */
/*                                    TESTS                                   */
/* -------------------------------------------------------------------------- */

/**
 * fearNotLetter("abce") should return the string d.

fearNotLetter("abcdefghjklmno") should return the string i.

fearNotLetter("stvwx") should return the string u.

fearNotLetter("bcdf") should return the string e.

fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
 */

/* -------------------------------------------------------------------------- */
/*                                  SOLUTION                                  */
/* -------------------------------------------------------------------------- */

function fearNotLetter(str) {
  let strArr = str.split("");
  // Get the index of the charachter before the missing charachter 
  let charBeforeMissing = strArr.reduce((prev, current) => {
    return prev ?
      current.charCodeAt(0) - prev.charCodeAt(0) > 1 ? prev : current :
      current;
  });

  // If there are no missing characters retrun undefined
  if (str.indexOf(charBeforeMissing) === str.length - 1) {
    return undefined;
  }

  // Return the missing charachter
  return String.fromCharCode(charBeforeMissing.charCodeAt(0) + 1);
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));