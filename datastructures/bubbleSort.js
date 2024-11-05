/* eslint-disable for-direction */

'use strict';

const swap = (arr, idx1, idx2, swaps) => {
	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	return swaps = false;
}
// time complexity = O(n2)

const bubbleSort = arr => {
	let noSwaps;
	for(let i = arr.length; i > 0; i--) {
		for(let j = 0; j < i - 1; j++) {
		 if(arr[j] > arr[j+1]) swap(arr, j,j+1, noSwaps)
		 noSwaps = false;
		}
		if(noSwaps) break;
	}
	return arr;
}


console.log(bubbleSort([7,5,90,12,343]))