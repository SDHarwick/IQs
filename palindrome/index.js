// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1];
	});
}

module.exports = palindrome;



// Solution 1

	// const rev = str.split('').reverse().join('');
	// if (rev === str) {
	// 	return true;
	// } else {
	// 	return false;
	// }

// Solution 1 Shortened

// const rev = str.split('').reverse().join('');
// 	return str === rev;


// Solution 2


// function palindrome(str) {
// 	const ary = str.split('');

// 	return ary.every((char, i) => {
// 		return char === str[str.length - i - 1];
// 	});
// }

//Solution 2 Shortened
// function palindrome(str) {
// 	return str.split('').every((char, i) => {
// 		return char === str[str.length - i - 1];
// 	});
// }

