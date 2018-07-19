/**
 * findLongestWord()
 *
 * Write a function that takes a string of words and returns the longest word.
 * i.e. findLongestWord("i like books full of dogs") should return "books"
 *
**/

// ++ YOUR CODE below

function findLongestWord (strinput) {
  
  var newArray = "";
  
  for (var i=0; i<strinput.length; i++) {
    var char = strinput[i];
    
    if (char !== "'" && char !== ".") {
      newArray += char;
    } else {
      newArray += "";
    }
  }
  
  newArray=newArray.split(" ");
  
	var longestIs = newArray[0];
	var control = newArray[0].length;
  

	for (var i=1; i<newArray.length; i++) {
		var extract = newArray[i].length;

		if (extract > control) {
			control = extract;
      longestIs = newArray[i];

		} else {
			control;
			longestIs;
		}
	}
	return longestIs;

}

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


console.group('ex-04');
  console.log('ex-04\n%cFunction: findLongestWord', 'background-color: green; color: white')
console.groupEnd();

console.log('Should return "baskets" from "I have baskets full of lemons"');
console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')

console.log('Should return "Alexander" from "Alexander shouldn’t talk anymore"');
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')

console.log('Should return "Texas" from "don’t mess with Texas"');
console.assert(findLongestWord("don't mess with Texas") === 'Texas')

console.log('Should return "time" from "a time to act."');
console.assert(findLongestWord('a time to act.') === 'time')

console.log('\n')
