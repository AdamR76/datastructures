class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		const weirdPrime = 31;
		for (let idx = 0; idx < Math.min(key.length, 100); idx++) {
			const char = key[idx],
				value = char.charCodeAt(0) - 96;
			total = (total * weirdPrime + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, value) {
		const idx = this._hash(key);
		if(!this.keyMap[idx]) {
			this.keyMap[idx] = [];
			this.keyMap[idx].push([key, value])
		}
		this.keyMap[idx].push([key, value])
	}

	get(key) {
		const idx = this._hash(key);
		if(this.keyMap[idx]) return this.keyMap[idx].find(val => val[0] === key)[1];
		return undefined;
	}

	keys() {
		const arr = [];
		for(let idx = 0; idx < this.keyMap.length; idx++) {
			if(this.keyMap[idx]) {
				for(let jdx = 0; jdx < this.keyMap[idx].length; jdx++) {
					if(!arr.includes(this.keyMap[idx][jdx][0])) 
					arr.push(this.keyMap[idx][jdx][0])
				}
			}
		}
		return arr;
		
	}

	values() {
		const arr = [];
		for(let idx = 0; idx < this.keyMap.length; idx++) {
			if(this.keyMap[idx]) {
				for(let jdx = 0; jdx < this.keyMap[idx].length; jdx++) {
					if(!arr.includes(this.keyMap[idx][jdx][1])) 
					arr.push(this.keyMap[idx][jdx][1])
				}
			}
		}
		return arr;
	}
}

const ht = new HashTable();
ht.set("hello", "world");
ht.set("foo", "bar");
console.log(ht.get("hello"))
console.log(ht.values())
console.log(ht.keys())