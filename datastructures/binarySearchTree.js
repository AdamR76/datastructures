/* eslint-disable no-constant-condition */
/* eslint-disable no-negated-condition */
/* eslint-disable max-classes-per-file */

'use strict';

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		const newNode = new Node(val);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (val === current.value) return undefined;
			if (val < current.value) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else if (val > current.value) {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}

	find(val) {
		if (this.root === null) return null;
		let current = this.root;
		while (current) {
			if (val < current.value) {
				current = current.left;
			} else if (val > current.value) {
				current = current.right;
			} else {
				return console.log(true);
			}
			return console.log(false);
		}
		return console.log(true);
	}

	bfs() {
		const data = [],
			queue = [];
		let node = this.root;
		queue.push(node);

		while (queue.length) {
			node = queue.shift();
			data.push(node.value);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}

	dfsPre() {
		const data = [],
			current = this.root;
		const traverse = node => {
			data.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};
		traverse(current);
		return data;
	}

	dfsPost() {
		const data = [],
			current = this.root;
		const traverse = node => {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.value);
		};
		traverse(current);
		return data;
	}

	dfsInOrder() {
		const data = [],
			current = this.root;
		const traverse = node => {
			if (node.left) traverse(node.left);
			data.push(node.value);
			if (node.right) traverse(node.right);
		};
		traverse(current);
		return data;
	}
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(20);
tree.insert(8);
// console.log(tree.bfs());
// console.log(tree.dfsPre())
// console.log(tree.dfsPost());
console.log(tree.dfsInOrder());
// tree.find(10);
// console.log(tree);
