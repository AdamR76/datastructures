'use strict';

const merge = (arr1, arr2) => {
	const sort = [...arr1, ...arr2].sort((num1, num2) => num1 - num2)
	return sort;
	// const results = [];
	//   let i = 0,
	//   j = 0;
	//   while (i < arr1.length && j < arr2.length) {
	//     if(arr2[j] > arr1[i]) {
	//       results.push(arr1[i]);
	//       i++;
	//     } else {
	//       results.push(arr2[j]);
	//       j++;
	//     }
	//     while(i < arr1.length) {
	//       results.push(arr1[i]);
	//       i++;
	//     }
	//     while(j < arr2.length) {
	//       results.push(arr2[j]);
	//       j++;
	//     }
	//   }
	//   return results;

}

const mergeSort = arr => {
	if(arr.length <= 1) return arr;
	const mid = Math.floor(arr.length/2);
	const left = mergeSort(arr.slice(0,mid));
	const right = mergeSort(arr.slice(mid));
	return merge(left, right)
}
const data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);

console.log(mergeSort(data))
