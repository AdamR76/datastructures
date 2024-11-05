'use strict';

// time complexity O(n2)

// const insertionSort = arr => {
//   for(let i = 0; i< arr.length; i++) {
//     let curr = arr[i];
//     for(var j = i - 1; j >= 0 && arr[j] > curr; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = curr;
//   }
//   return arr;
// }

const insertionSort = inputArr => {
			for (let idx = 1; idx < inputArr.length; idx++) {
					// Choosing the first element in our unsorted subarray
					const current = inputArr[idx];
					// The last element of our sorted subarray
					let jdx = idx-1; 
					while ((jdx > -1) && (current < inputArr[jdx])) {
							inputArr[jdx+1] = inputArr[jdx];
							jdx--;
					}
					inputArr[jdx+1] = current;
			}
	return inputArr;
}


console.log(insertionSort([2,1,9,76,4]))