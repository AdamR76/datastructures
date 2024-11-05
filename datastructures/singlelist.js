/* eslint-disable no-negated-condition */
/* eslint-disable max-classes-per-file */

'use strict';

// class Student {
// 	constructor(firstName, lastName, age) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.age = age;
// 		this.tardies = 0;
// 		this.scores = [];
// 	}

// 	fullname() {
// 		return `${this.firstName}, ${this.lastName}`
// 	}

// 	markLate() {
// 		this.tardies += 1;
// 		return `${this.firstName}, ${this.lastName}, ${this.tardies}`
// 	}

// 	addScore(score) {
// 		this.scores.push(score);
// 		return this.scores;
// 	}

// 	calculateAverage() {
// 		const sum = this.scores.reduce((xx, yy) => xx + yy);
// 		return sum/this.scores.length;
// 	}
// }

// const firstStudent = new Student('Adam', 'Robinson', 37);
// const second = new Student('Laura', 'Robinson', 40);

// console.log(firstStudent.fullname());
// console.log(second.fullname());

// ////////////////////////////// SINGLY LINKED LISTS AND CLASS SYNTAX

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);
		if (this.head) {
			this.tail.next = newNode;
			this.tail = newNode;
		} else {
			this.head = newNode;
			this.tail = this.head;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.length) return undefined;
		let current = this.head;
		let newTail = current;
		while (current.next !== null) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	shift() {
		if (!this.head) return undefined;
		const currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) this.tail = null;
		return currentHead;
	}

	unshift(val) {
		const newNode = new Node(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(idx) {
		if(idx < 0 || idx >= this.length) return null;
		let counter = 0;
		let current = this.head;
		while(counter !== idx) {
			current = current.next;
			counter++
		}
		return current;
	}

	set(idx, val) {
		const foundNode = this.get(idx);
		if(foundNode) {
			foundNode.val = val;
			return true
		}
		return false;
	}

	insert(idx, val) {
		const newNode = new Node(val)
		if(idx < 0 || idx > this.length) return false;
		if(idx === this.length) return !!this.push(newNode);
		if(idx === 0) return !!this.unshift(newNode);

		const prev = this.get(idx - 1);
		const temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}

	remove(idx) {
		if(idx < 0 || idx >= this.length) return null;
		if(idx === this.length - 1) return this.pop()
		if(idx === 0) return this.shift();

		const prev = this.get(idx - 1),
			removed = prev.next;
		prev.next = removed.next;
		this.length--;
		return removed;
	}

	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let prev = null,
			next = null;
		for(let idx = 0; idx < this.length; idx++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}

	print() {
		const arr = [];
		let curr = this.head;
		while(curr) {
			arr.push(curr.val);
			curr = curr.next;
		}
		console.log(arr)
	}
}

const list = new SinglyLinkedList();
list.push('Hi');
list.push('there');
list.push('!');
list.unshift("FIRST");
list.get(3)
list.set(2, '!!');
console.log(list.insert(1, 'NEW NODE'))
console.log(list.print());
list.reverse();
console.log(list.print())
