/* eslint-disable max-classes-per-file */
/* eslint-disable init-declarations */
/* eslint-disable no-constant-condition */

'use strict';

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(val, priority) {
		const newNode = new Node(val, priority);
		this.values.push(newNode);
		this.bubbleUp();
	}

	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			const parentIdx = Math.floor((idx - 1) / 2);
			const parent = this.values[parentIdx];
			if (element.priority >= parent.priority) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}

	sinkDown() {
		let idx = 0;
		const { length } = this.values,
			[element] = this.values;

		while (true) {
			const leftIdx = 2 * idx + 1,
				rightIdx = 2 * idx + 2;
			let rightChild, leftChild;
			let swap = null;
			if (leftIdx < length) {
				leftChild = this.values[leftIdx];
				if (leftChild.priority < element.priority) {
					swap = leftIdx;
				}
			}

			if (rightIdx < length) {
				rightChild = this.values[rightIdx];
				if (
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightIdx;
				}
			}
			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}

	dequeue() {
		const [first] = this.values,
			last = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = last;
			this.sinkDown();
		}

		return first;
	}
}

const heap = new PriorityQueue();
heap.enqueue('cold', 5);
heap.enqueue('gunshot wound', 1);
heap.enqueue('high fever', 4);
heap.enqueue('broken arm', 2);
heap.enqueue('glass in foot', 3);
heap.dequeue();
heap.dequeue();
heap.dequeue();
console.log(heap);
