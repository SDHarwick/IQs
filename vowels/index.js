// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

// g makes you find all instances rather than stopping after the first one
// i make the regEx case insensitive

	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;

}

module.exports = vowels;

// // Solution 1

// function vowels(str) {

// 	let count = 0;
// 	const vowelCheck = ['a', 'e', 'i', 'o', 'u'];
// 	for (let char of str.toLowerCase()) {
// 		if (vowelCheck.includes(char)) {
// 			count++; 
// 		}
// 	}

// 	return count;

// }