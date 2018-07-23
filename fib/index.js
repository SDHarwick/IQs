// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// Fib in a recursive solution is an exponential time solution
// Thus it is very bad and not to be used unless you use memoization

// Memoization: Store the arguments of each function call along with the result.
// If the function is called again with the same arguments, return the precomputed 
// result rather than running the function again

function memoize(fn) {
	const cache = {};
	return function(...args) {
		if (cache[args]) {
			return cache[args];
		}

		const result = fn.apply(this, args);
		cache[args] = result;

		return result;
	
	}
}


function fib(n) {
	if (n < 2) {
		return n;
	}
	
	return fib(n-1) + fib(n-2);
}

fib = memoize(fib);

module.exports = fib;




// // Solution 4

// function memoize(fn) {
// 	const cache = {};
// 	return function(...args) {
// 		if (cache[args]) {
// 			return cache[args];
// 		}

// 		const result = fn.apply(this, args);
// 		cache[args] = result;

// 		return result;
	
// 	}
// }


// function slowFib(n) {
// 	if (n < 2) {
// 		return n;
// 	}
	
// 	return fib(n-1) + fib(n-2);
// }

// const fib = memoize(slowFib);

// module.exports = fib;




// Solution 3
// Fib in a recursive solution is an exponential time solution
// Thus it is very bad and not to be used unless you use memoization

// Memoization: Store the arguments of each function call along with the result.
// If the function is called again with the same arguments, return the precomputed 
// result rather than running the function again

// function fib(n) {
// 	if (n < 2) {
// 		return n;
// 	}
	
// 	return fib(n-1) + fib(n-2);
// }

// module.exports = fib;




// // Solution 2

// function fib(n) {
// 	const result = [0, 1];

// 	for (let i = 2; i <= n; i++) {
// 		const a = result[i - 1];
// 		const b = result[i - 2];
// 		result.push(a + b);
// 	}

// 	return result[n];

// }

// module.exports = fib;


// Solution 1

// function fib(n) {
// 	let total = [0, 1];

// 	for (var i = 0; i <= n-1; i++) {
// 		let a = total.length - 1;
// 		let b = total.length - 2;
// 		let newVal = total[a] + total[b];
// 		total.push(newVal);
// 	}

// 	let l = total.length-2
// 	return total[l];

// }

// module.exports = fib;