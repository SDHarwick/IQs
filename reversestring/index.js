// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	// To Debug
	// debugger;
	return str.split('').reduce((rev, char) => char + rev, '');
}

// To make debugger work
// reverse('asdf');

// node inspect index.js

// press repl to get access to variables
// press c to continue through the code until you hit the next debugger statement

module.exports = reverse;


// Solution 1
// function reverse(str) {
// 	var reversedString = str.split('').reverse().join('');
// 	return reversedString;
// }


// Solution 2
	// let reversed = '';

	// for (let character of str) {
	// 	reversed = character + reversed;
	// }

	// return reversed;

// Solution 3
	// return str.split('').reduce((reversed, character) => {
	// 	return character + reversed;
	// }, '');


// Solution 3 Reduced Syntax
	// return str.split('').reduce((rev, char) => 
	// 	char + rev
	// , '');