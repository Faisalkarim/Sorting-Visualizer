// import React, { useState } from 'react';

// const NumberInsertionComponent = () => {
//   const [number, setNumber] = useState(0);
//   const [inputNumber, setInputNumber] = useState('');

//   const handleInputChange = (event) => {
//     setInputNumber(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setNumber(parseInt(inputNumber));
//     setInputNumber('');
//   };

//   const handleInsertNumber = () => {
//     setNumber((prevNumber) => prevNumber + 1);
//   };

//   const renderCircles = () => {
//     const circles = [];
//     for (let i = 1; i <= number; i++) {
//       circles.push(
//         <div key={i} className="circle">
//           {i}
//         </div>
//       );
//     }
//     return circles;
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="number"
//           value={inputNumber}
//           onChange={handleInputChange}
//           placeholder="Enter a number"
//         />
//         <button type="submit">Start</button>
//       </form>
//       <button onClick={handleInsertNumber}>Insert Number</button>
//       <div className="circle-container">{renderCircles()}</div>
//     </div>
//   );
// };

// export default NumberInsertionComponent;


// import React, { useState } from 'react';

// const NumberNode = () => {
//   const [number, setNumber] = useState('');

//   const handleChange = (event) => {
//     setNumber(event.target.value);
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <label htmlFor="numberInput">Enter a number:</label>
//       <input
//         type="number"
//         id="numberInput"
//         value={number}
//         onChange={handleChange}
//       />
//       <div
//         style={{
//           backgroundColor: 'lightblue',
//           borderRadius: '50%',
//           width: '100px',
//           height: '100px',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginTop: '10px',
//         }}
//       >
//         <span style={{ color: 'blue', fontSize: '24px' }}>{number}</span>
//       </div>
//     </div>
//   );
// };

// export default NumberNode;

// import React, { useState } from 'react';

// const NumberNode = () => {
//   const [number, setNumber] = useState('');
//   const [confirmedNumber, setConfirmedNumber] = useState('');

//   const handleChange = (event) => {
//     setNumber(event.target.value);
//   };

//   const handleConfirm = () => {
//     setConfirmedNumber(number);
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <label htmlFor="numberInput">Enter a number:</label>
//       <input
//         type="number"
//         id="numberInput"
//         value={number}
//         onChange={handleChange}
//       />
//       <button onClick={handleConfirm} disabled={!number}>OK</button>
//       {confirmedNumber && (
//         <div
//           style={{
//             backgroundColor: 'lightblue',
//             borderRadius: '50%',
//             width: '100px',
//             height: '100px',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginTop: '10px',
//           }}
//         >
//           <span style={{ color: 'blue', fontSize: '24px' }}>{confirmedNumber}</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NumberNode;

// import React, { useState } from 'react';

// const NumberNode = () => {
//   const [number, setNumber] = useState('');
//   const [confirmedNumbers, setConfirmedNumbers] = useState([]);

//   const handleChange = (event) => {
//     setNumber(event.target.value);
//   };

//   const handleConfirm = () => {
//     if (number) {
//       setConfirmedNumbers([...confirmedNumbers, number]);
//       setNumber('');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <label htmlFor="numberInput">Enter a number:</label>
//       <input
//         type="number"
//         id="numberInput"
//         value={number}
//         onChange={handleChange}
//       />
//       <button onClick={handleConfirm} disabled={!number}>OK</button>
//       {confirmedNumbers.map((confirmedNumber, index) => (
//         <div
//           key={index}
//           style={{
//             backgroundColor: 'lightblue',
//             borderRadius: '50%',
//             width: '100px',
//             height: '100px',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginTop: '10px',
//           }}
//         >
//           <span style={{ color: 'blue', fontSize: '24px' }}>{confirmedNumber}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NumberNode;





// const NumberNode = () => {
//   const [number, setNumber] = useState('');
//   const [tree, setTree] = useState(null);

//   const insertNode = (node, value) => {
//     if (node === null) {
//       return { value, left: null, right: null };
//     }
//     if (value < node.value) {
//       node.left = insertNode(node.left, value);
//     } else {
//       node.right = insertNode(node.right, value);
//     }
//     return node;
//   };

//   const handleChange = (event) => {
//     setNumber(event.target.value);
//   };

//   const handleConfirm = () => {
//     if (number) {
//       setTree(insertNode(tree, number));
//       setNumber('');
//     }
//   };

//   const renderTree = (node) => {
//     if (node === null) {
//       return null;
//     }

//     const leftChild = renderTree(node.left);
//     const rightChild = renderTree(node.right);

//     return (
//       <div className="tree-container">
//         <div className="node">
//           <span className="node-value">{node.value}</span>
//           {leftChild && (
//             <div className="edge left-edge"></div>
//           )}
//           {rightChild && (
//             <div className="edge right-edge"></div>
//           )}
//         </div>
//         <div className="child-container">
//           <div className="left-child">
//             {leftChild}
//           </div>
//           <div className="right-child">
//             {rightChild}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
      
//       <div className="input-container">
//         <label htmlFor="numberInput" className="label">Enter a number:</label>
//         <input
//           type="number"
//           id="numberInput"
//           value={number}
//           onChange={handleChange}
//           className="input-field"
//         />
//         <button onClick={handleConfirm} disabled={!number} className="button">OK</button>
//       </div>
//       <div className="tree-container">
//         {tree && renderTree(tree)}
//       </div>
//     </div>
//   );
// };

// export default NumberNode;

import React, { useState } from 'react';
import './NumStyle.css';

const TreeNode = ({ value }) => (
  <div className="node">
    <span className="node-value">{value}</span>
  </div>
);

const NumberNode = () => {
  const [number, setNumber] = useState('');
  const [tree, setTree] = useState(null);

  const insertNode = (node, value) => {
    if (node === null) {
      return { value, left: null, right: null };
    }
    if (value < node.value) {
      node.left = insertNode(node.left, value);
    } else {
      node.right = insertNode(node.right, value);
    }
    return node;
  };

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleConfirm = () => {
    if (number) {
      setTree(insertNode(tree, number));
      setNumber('');
    }
  };

  const renderTree = (node) => {
    if (node === null) {
      return null;
    }
    return (
      <div className="tree-container">
        <TreeNode value={node.value} />
        <div className="child-container">
          <div className="left-child">
            {renderTree(node.left)}
          </div>
          <div className="right-child">
            {renderTree(node.right)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      
      <div className="input-container">
        <label htmlFor="numberInput" className="label"><b>Enter a number:</b></label>
        <input
          type="number"
          id="numberInput"
          value={number}
          onChange={handleChange}
          className="input-field"
        />
        <button onClick={handleConfirm} disabled={!number} className="button">OK</button>

        <div className="tree-container">
        { renderTree(tree)}
      </div>
      </div>
    </div>
  );
};

export default NumberNode;
