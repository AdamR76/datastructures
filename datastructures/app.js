'use strict';

// const performance = require('performance-now');

// // for loop
// const addUpTo = num => {
//   let total = 0;
//   for (let i=0; i<=num; i++) {
//     total+=i
//   }
//   return total;
// }

// // Functional?
// const addUpTo = num => num * (num + 1) / 2;
// const t1 = performance();
// console.log(addUpTo(1000000000));
// const t2 = performance();
// console.log(`${(t2 - t1) / 1000} seconds`)

// const charCount = str => {
//   const obj = {};
//   for (let it = 0; it < str.length; it++) {
//     const char = str[it].toLowerCase();
//     if(/[a-z0-9]/.test(char)) {
//       obj[char] = ++obj[char] || 1;
//     }
//   }
//   return obj;
// }


// console.log(charCount('I am a string.'))

// const same = (arr1, arr2) => {
//   if(arr1.length !== arr2.length) return false;
//   const frequencyCounter1 = {}
//   const frequencyCounter2 = {}
//   for(const val of arr1) {
//       frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//   }
//   for(const val of arr2) {
//       frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
//   }
//   console.log(frequencyCounter1);
//   console.log(frequencyCounter2);
//   for(const key in frequencyCounter1) {
//       if(!(key ** 2 in frequencyCounter2)) {
//           return false
//       }
//       if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//           return false
//       }
//   }
//   return true
// }
// console.log(same([1,2,3,2,5], [9,1,4,4,25]))

const anagram = (str1, str2) => {
	if(str1.length !== str2.length) return false;
	const diff = str1.split('').sort()
	.filter(val => !str2.split('').sort().includes(val))
	.concat(str2.split('').filter(val => !str1.split('').includes(val)))
	return !diff.length
}

console.log(anagram('rat', 'car'));
console.log(anagram('texttwisttime', 'timetwisttext'));
console.log(anagram('anagram', 'nagaram'))
console.log(anagram('qwerty', 'qeywrt'))
console.log(anagram('anagrams', 'nagaramm'))
console.log(anagram('aaabbb', 'aabbbb'))


// const sumZero = arr => {
//   let left = 0;
//   let right = arr.length - 1;
//   while(left < right) {
//     let sum = arr[left] + arr[right];
//     if(sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

// console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]))

// const countUniqueValues = arr => {
//   if(!arr.length) return 0;
//   let it = 0;
//   for(let jay = 1; jay < arr.length; jay++) {
//     if(arr[it] !== arr[jay]) {
//       it++;
//       arr[it] = arr[jay]
//     }
//   }
//   return it + 1;
// }

// console.log(countUniqueValues([1,1,2,3,3,4,5,6,6,7]));
// console.log(countUniqueValues([]));

// const maxArraySum = (arr, num) => {
//   let maxSum = 0,
//     tempSum = 0;
//   if(arr.length < num) return null;
//   for(let it = 0; it < num; it++) {
//     maxSum +=arr[it];
//   }
//   tempSum = maxSum;
//   for(let it = num; it < arr.length; it++) {
//     tempSum = tempSum - arr[it - num] + arr[it];
//     maxSum = Math.max(maxSum, tempSum);
//   } 
//   return maxSum;
// }

// const search = (arr, num) => arr.indexOf(num);

// console.log(search([1,2,3,4,5], 7))

// ////// Recursion ///////////////////

// const checkOdd = arr => {
//   const odd = num => num % 2
//   return arr.filter(odd);
// }

// console.log(checkOdd([10,9,8,7,6,5,4,3,2,1]));

// const sumRange = num => {
//   if(num === 1) return 1;
//   return num + sumRange(num-1);
// }

// console.log(sumRange(25))

// const factorial = num => {
//   if(num === 1) return 1
//   return num * factorial(num - 1);
// }

// console.log(factorial(10))

// const power = (base, exp) => {
//   if((exp === 0)) return 1;
//   return base * power(base, exp - 1)
// }

// console.log(power(2,4))

// const factorial = num => {
//   if(num < 1) return 1;
//   return num * factorial(num - 1)
// }

// console.log(factorial(0));

// const productOfArray = arr => arr.reduce((a,b) => a * b);

// console.log(productOfArray([1,2,3]))

// const recursiveRange = num => {
//   if(num === 1) return 1;
//   return num + recursiveRange(num - 1);
// }

// console.log(recursiveRange(4));


// const fibonacci = num => {
//   if (num <= 2) return 1;
//   return fibonacci(num - 2) + fibonacci(num - 1);
// }

// console.log(fibonacci(10));

// const reverse = str => {
//   if(str.length <= 1) return str;
//   return reverse(str.slice(1)) + str[0] 
// }

// console.log(reverse('air'));


// const isPalindrome = str => {
//   if(!str.length) return undefined;
//   if(str === str.split('').reverse().join('')) return true
//   return false
// }

// console.log(isPalindrome('awesome'));
// console.log(isPalindrome('amanaplanacanalpanama'))

// ////// Search Algorithms ///////////////

// const linearSearch = (arr, val) => arr.indexOf(val);

// console.log(linearSearch([1,2,3,4,5,6,7,8,9], 2));

// const binarySearch = (arr, val) => {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((left + right) / 2);
//   while(arr[middle] !== val) {
//     if(val < arr[middle]) {
//       right = middle - 1;
//     } else {
//       left = middle + 1
//     }
//     middle = Math.floor((left + right) / 2);
//   }
//   return middle;
// }

// console.log(binarySearch([1,2,3,4,5,6,7,8,9], 6))

