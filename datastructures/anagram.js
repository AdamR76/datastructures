'use strict';

const validAnagram = (first, second) => {
	if (first.length !== second.length) return false;

	const lookup = {};

	for (let idx = 0; idx < first.length; idx++) {
		const letter = first[idx];
		// if letter exists, increment, otherwise set to 1
	 lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
	}
	for (let idx = 0; idx < second.length; idx++) {
		const letter = second[idx];
		// can't find letter or letter is zero then it's not an anagram
		if (!lookup[letter]) {
			return false;
		} 
			lookup[letter] -= 1;
		
	}

	return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram('anagrams', 'nagaramm'))