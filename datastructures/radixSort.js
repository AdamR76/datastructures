'use strict';

const getDigit = (num, pos) => Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;

const digitCount = num => num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1

const mostDigits = nums => {
	let maxDigits = 0;
	for(let idx = 0; idx < nums.length; idx++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[idx]))
	}
	return maxDigits;
}

const radixSort = arr => {
	const largestNum = mostDigits(arr);
	for(let idx = 0; idx < largestNum; idx++) {
		const buckets = Array.from({ length: 10 }, () => []);
		for(let jdx = 0; jdx < arr.length; jdx++) {
			buckets[getDigit(arr[jdx], idx)].push(arr[jdx]);
		}
		arr = [].concat(...buckets)
	}
	return arr;
}

console.log(radixSort([23,345,5467,1259753,12,2345,9852]))