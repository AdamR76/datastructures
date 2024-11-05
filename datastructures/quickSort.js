'use strict';

// Best Case O(n log n) Worst Case O(n2)
const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

const pivot = (arr, start = 0, end = arr.length - 1) => {
	const pivot = arr[start];
	let swapIndex = start;

	for (let idx = start + 1; idx < arr.length; idx++) {
		if (pivot > arr[idx]) {
			swapIndex++;
			swap(arr, swapIndex, idx);
		}
	}
	swap(arr, start, swapIndex);
	return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
	if(left < right) {
	const pivotIdx = pivot(arr, left, right);
	quickSort(arr, left, pivotIdx - 1);
	quickSort(arr, pivotIdx + 1, right)
	}
	return arr;
};

console.log(quickSort([-2,4, 8, 2, 1, 5, 7, 6, 3]));
