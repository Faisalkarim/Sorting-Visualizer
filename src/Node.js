import React from 'react';

const Node = ({ value, left, right }) => (
  <div>
    <span>{value}</span>
    {left && <Node {...left} />}
    {right && <Node {...right} />}
  </div>
);

export default Node;
