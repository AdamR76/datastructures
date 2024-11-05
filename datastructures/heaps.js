/* eslint-disable init-declarations */
/* eslint-disable no-constant-condition */

'use strict';

class MaxBinaryHeap {
	constructor() {
		this.values = [41, 39, 33, 18, 27, 12];
	}

	insert(element) {
		this.values.push(element);
		this.bubbleUp();
	}

	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			const parentIdx = Math.floor((idx - 1) / 2);
			const parent = this.values[parentIdx];
			if (element <= parent) break;
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
				if (leftChild > element) {
					swap = leftIdx;
				}
			}

			if (rightIdx < length) {
				rightChild = this.values[rightIdx];
				if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
					swap = rightIdx;
				}
			}
			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}

	extractMax() {
		const [first] = this.values,
			last = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = last;
			this.sinkDown();
		}

		return first;
	}
}

const heap = new MaxBinaryHeap();
heap.insert(55);
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
console.log(heap);
