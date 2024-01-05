import React from 'react';
import Node from './Node';

const BinarySearchTree = ({ root }) => (
  <div>
    {root && <Node {...root} />}
  </div>
);

export default BinarySearchTree;
