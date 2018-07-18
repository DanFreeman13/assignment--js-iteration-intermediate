/**
 * hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as an argument
 * and returns a boolean if it has a word with double letters.
 *
 *    hasDoubleLetters('matter')
 *     => true // the tt are double-letters
 *
 *    hasDoubleLetters('chopper')
 *       => true // the pp are double-letters
 *
 *    hasDoubleLetters('mister')
 *      => false  // no double letters
 *
 *    hasDoubleLetters('demand')
 *      => false // the double-letters have to be next to eachother
**/

// ++ YOUR CODE below











// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-02');
  console.log('%cFunction: hasDoubleLetters', 'background-color: green; color: white')
console.groupEnd();

  console.log('Should return true for arg input "shutter"');
  console.assert(hasDoubleLetters('stutter') === true)

  console.log('Should return false for arg input "prospect"');
  console.assert(hasDoubleLetters('prospect') === false)


  console.log('Should return false for arg input "shoehorn"');
  console.assert(hasDoubleLetters('shoehorn') === false)

  console.log('Should return true for arg input "Aardvark"');
  console.assert(hasDoubleLetters('Aardvark') === true)

console.log('\n')
