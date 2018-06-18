// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	let results = [];
	

	for (let i = 0; i < n; i++) {
		results.push([]);
	}

	let count = 1;

	let rowStart = 0;
	let rowEnd = n - 1;
	let colStart = 0;
	let colEnd = n - 1;	

	while (colStart <= colEnd && rowStart <= rowEnd) {
		// Top Row
		for (let i = colStart; i <= colEnd; i++ ) {
			results[rowStart][i] = count;
			count++;
		}
		rowStart++;

		// Right Col
		for (let i = rowStart; i <= rowEnd; i++ ) {
			results[i][colEnd] = count;
			count++;
		}
		colEnd--;


		// Bottom Row
		for (let i = colEnd; i >= colStart; i-- ) {
			results[rowEnd][i] = count;
			count++;
		}
		rowEnd--;

		// Start Column
		for (let i = rowEnd; i >= rowStart; i-- ) {
			results[i][colStart] = count;
			count++;
		}
		colStart++;
	}


	console.log(results);

	return results;

}

module.exports = matrix;








// // Almost Working Solution

// function matrix(n) {
// 	let results = [];
	

// 	for (let i = 0; i < n; i++) {
// 		results.push([]);
// 	}

// 	let count = 1;

// 	let rowStart = 0;
// 	let rowEnd = n;
// 	let colStart = 0;
// 	let colEnd = n;


// 	for (let i = 0; i < n; i++) {
// 		results[rowStart].push(count);
// 		count++;
// 	}

// 	rowStart++;

// 	for (let i = rowStart; i < rowEnd; i++) {
// 		results[rowStart][rowEnd - 1] = count;
// 		count++;
// 		rowStart++
// 	}

// 	for (let i = colEnd - 1; i > colStart; i-- ) {
// 		results[rowEnd - 1][colEnd - 2] = count;
// 		count++;
// 		colEnd--;
// 	}
// 	rowStart = 0;
	
// 	for (let i = n - 1; i > rowStart + 1; i-- ){
// 		results[rowEnd-2][colStart] = count;
// 		count++;
// 		rowEnd--; 
// 	}

	

	
// 	console.log(results);
// 	return results;

// }

// module.exports = matrix;

