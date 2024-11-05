/* eslint-disable max-classes-per-file */

'use strict';

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length === 0) return undefined;
		const poppedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}
		this.length--;
		return poppedNode;
	}

	shift() {
		if (this.length === 0) return undefined;
		const shifted = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = shifted.next;
			this.head.prev = null;
			shifted.next = null;
		}
		this.length--;
		return shifted;
	}

	unshift(val) {
		const newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(idx) {
		if (idx < 0 || idx >= this.length) return null;
		let counter = 0,
			current = this.head;
		if (idx <= this.length / 2) {
			while (counter !== idx) {
				current = current.next;
				counter++;
			}
		} else {
			counter = this.length - 1;
			current = this.tail;
			while (counter !== idx) {
				current = current.prev;
				counter--;
			}
		}
		return current;
	}

	set(idx, val) {
		const foundNode = this.get(idx);
		console.log(foundNode);
		if (foundNode !== null) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

  insert(idx, val) {
    const newNode = new Node(val);
    if(idx < 0 || idx > this.length) return false;
    if(idx === 0) return !!this.unshift(val);
    if(idx === this.length) return this.push(val);

    console.log(this.length)

    const prevNode = this.get(idx - 1);
    const afterNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true
  }

  remove(idx) {
    if(idx < 0 || idx >= this.length) return undefined;
    if(idx === 0) return this.shift()
    if(idx === this.length - 1) return this.pop();

    const foundNode = this.get(idx),
      prev = foundNode.prev,
      next = foundNode.next;
    prev.next = next;
    next.prev = prev;
    foundNode.next = null;
    foundNode.prev = null;
    this.length--;
    return foundNode
  }

	print() {
		const arr = [];
		let curr = this.head;
		while (curr) {
			arr.push(curr.val);
			curr = curr.next;
		}
		console.log(arr);
	}
}

const list = new DoublyLinkedList();
list.push(99);
list.push(100);
list.push(101);
list.push(102);
list.unshift(98);
list.insert(5, 103);
list.remove(5)
list.print();