/* eslint-disable no-negated-condition */
/* eslint-disable max-classes-per-file */

'use strict';

// FIFO

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		const newNode = new Node(val);
		if(!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		return ++this.size;
	}

	dequeue() {
		if(!this.first) return null;
		const temp = this.first;
		if(this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}

const q = new Queue;
q.enqueue('hi');
q.enqueue('ho');
console.log(q);

q.enqueue('he');
console.log(q);
q.dequeue();
console.log(q)