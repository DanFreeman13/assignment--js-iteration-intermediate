/**
 * maxOfArray()
 *
 * Write a function maxOfArray() that takes an array of
 * numbers as an argument and finds the highest number.
 *
**/

// ++ YOUR CODE below











// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-03');
  console.log('%cFunction: maxOfArray', 'background-color: green; color: white')
console.groupEnd();

  console.log('Should return 21 for input: [2, 7, 3, 4, 21, 0] series');
  console.assert(maxOfArray([2,7,3,4,21,0]) === 21)

  console.log('Should return 100 for input: [100, 9, 8, 7, 6, 10] series');
  console.assert(maxOfArray([100,9,8,7,6,10]) === 100)

  console.log('Should return 201 for input: [84, 32, 11, 31, 12, 201] series');
  console.assert(maxOfArray([84,32,11,31,12,201]) === 201)

  console.log('Should return 108 for input: [100, 108, 31, 44, 67, 100] series');
  console.assert(maxOfArray([100,108,31,44,67,100]) === 108)

console.log('\n')
