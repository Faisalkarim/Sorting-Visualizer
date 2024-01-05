import React from 'react';
import BinarySearchTree from './BS';

const BST = () => {
  // Assuming you have a binary search tree data structure and a root node
  const binarySearchTree = {
    value: 10,
    left: {
      value: 5,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
    right: {
      value: 15,
      left: null,
      right: {
        value: 20,
        left: null,
        right: null,
      },
    },
  };

  return (
    <div>
      <h1>Binary Search Tree Visualization</h1>
      <BinarySearchTree root={binarySearchTree} />
    </div>
  );
};

export default BST;
