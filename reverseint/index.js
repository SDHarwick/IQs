// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	const rev = n.toString().split('').reverse().join('');

	return parseInt(rev) * Math.sign(n);
}

module.exports = reverseInt;


// Solution 1

// function reverseInt(n) {
// 	const ary = n.toString().split('').reverse();

// 	if ( ary[ary.length - 1] === '-' ) {
// 		ary.unshift("-");
// 	} 
// 	return parseInt(ary.join(''));
// }


// Solution 2

// function reverseInt(n) {
// 	const rev = n.toString().split('').reverse().join('');

// 	return parseInt(rev) * Math.sign(n);
// }