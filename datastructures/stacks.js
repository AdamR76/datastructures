/* eslint-disable no-negated-condition */
/* eslint-disable max-classes-per-file */

'use strict';

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		const newNode = new Node(val);
		if(!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			const temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		return ++this.size;
	}

	pop() {
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

const stack = new Stack();
stack.push('hi');
stack.push('ho');
stack.pop();


console.log(stack)