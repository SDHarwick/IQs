// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
	const q = new Queue();

	while (sourceOne.peek() || sourceTwo.peek()) {
		if (sourceOne.peek()) {
			q.add(sourceOne.remove());
		}
		if (sourceTwo.peek()) {
			q.add(sourceTwo.remove());
		}
	}

	return q;

}

module.exports = weave;






// // Semi Solution

// const Queue = require('./queue');

// function weave(sourceOne, sourceTwo) {
// 	q = new Queue();



// 	console.log(q);

// 	s1L = sourceOne.data.length
// 	s2L = sourceTwo.data.length

// 	let longest = s1L < s2L ? s2L : s1L
// 	let shortest = s1L > s2L ? s2L : s1L

// 	console.log('s1L:   ' + s1L)
// 	console.log('s2L:   ' + s2L)
// 	console.log(longest);
// 	console.log(shortest);

// 	let count = 0;

// 	for (let i = 0; i < longest; i++) {

// 		// if (count <= shortest) {
// 			q.add(sourceTwo.data[i]);
// 			q.add(sourceOne.data[i]);
			
// 			console.log(q);
// 		// 	count++;
// 		// }
		
// 	}
// 	q.data.reverse();
// 	return q;

// }

// module.exports = weave;
