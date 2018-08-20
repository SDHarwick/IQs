// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
	return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagrams;


//Test

// Solution 1

// function anagrams(stringA, stringB) {
// 	const aCharMap = buildCharMap(stringA);
// 	const bCharMap = buildCharMap(stringB);

// 	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
// 		return false;
// 	}

// 	for (let char in aCharMap) {
// 		if  (aCharMap[char] !== bCharMap[char]) {
// 			return false;
// 		}
// 	}

// 	return true;
// }


// function buildCharMap(str) {
// 	const charMap = {};
// 	for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
// 		charMap[char] = charMap[char] + 1 || 1;
// 	}
// 	return charMap;
// }



// Solution 2

// function anagrams(stringA, stringB) {
// 	return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
// 	return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
// }



// This solution does not work

	// stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
	// stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

	// const charMap1 = {};

	// for ( let char of stringA) {
	// 	if (charMap1[char]) {
	// 		charMap1[char]++;
	// 	} else {
	// 		charMap1[char] = 1;
	// 	}
	// }

	// const charMap2 = {};

	// for ( let char of stringB) {
	// 	if (charMap2[char]) {
	// 		charMap2[char]++;
	// 	} else {
	// 		charMap2[char] = 1;
	// 	}
	// }


	// console.log(charMap1);
	// console.log(charMap2);

	// if (charMap2.length - 1 === charMap1.length - 1 ){
	// 	return charMap1 == charMap2;
	// } else return false;




