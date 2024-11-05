'use strict';

const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//O(n2)

// const selectionSort = arr => {
//   for(let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for(let j = i+1; j < arr.length; j++) {
//       if(arr[j] < arr[lowest]) {
//         lowest = j
//       }
//     }
//     if(i !== lowest) {
//     const temp = arr[i];
//     arr[i] = arr[lowest];
//     arr[lowest] = temp;
//     }
//   }
//   return arr;
// }

const selectionSort = arr => {
	for(let i = 0; i < arr.length; i++) {
		let lowest = i;
		for(let j = i+1; j < arr.length; j++) {
			if(arr[j] < arr[lowest]) {
				lowest = j
			}
		}
		if(i !== lowest) swap(arr, i, lowest)
	}
	return arr;
}



console.log(selectionSort([34,22,10,19,17]))