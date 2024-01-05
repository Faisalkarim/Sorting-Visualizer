// // import React, { useState, useRef } from "react";
// // import "./RandomArr.css";
// // import Button from "@mui/material/Button";

// // function RandomArrayGenerator() {
// //   const [array, setArray] = useState(generateRandomArray());
// //   const [swapping, setSwapping] = useState([]);
// //   const [sorting, setSorting] = useState(false);
// //   const timeoutRef = useRef(null);

// //   function generateRandomArray() {
// //     const newArray = [];
// //     const length = Math.floor(Math.random() * 66) + 5;
// //     for (let i = 0; i < length; i++) {
// //       newArray.push(Math.floor(Math.random() * 500));
// //     }
// //     return newArray;
// //   }

// //   function handleGenerateArray() {
// //     setArray(generateRandomArray());
// //   }

// //   async function bubbleSort() {
// //     setSorting(true);
// //     let len = array.length;
// //     let swapped = false;
// //     do {
// //       swapped = false;
// //       for (let i = 0; i < len; i++) {
// //         if (array[i] > array[i + 1]) {
// //           await swap(i, i + 1);
// //           swapped = true;
// //         }
// //       }
// //       len--;
// //     } while (swapped && sorting);
// //     setSorting(false);
// //   }

// //   async function selectionSort() {
// //     setSorting(true);
// //     for (let i = 0; i < array.length; i++) {
// //       let min_index = i;
// //       for (let j = i + 1; j < array.length; j++) {
// //         if (array[j] < array[min_index]) {
// //           min_index = j;
// //         }
// //       }
// //       if (min_index !== i) {
// //         await swap(i, min_index);
// //       }
// //       if (!sorting) {
// //         break;
// //       }
// //     }
// //     setSorting(false);
// //   }

// //   async function insertionSort() {
// //     setSorting(true);
// //     for (let i = 1; i < array.length && sorting; i++) {
// //       let key = array[i];
// //       let j = i - 1;
// //       while (j >= 0 && array[j] > key && sorting) {
// //         await swap(j + 1, j);
// //         j = j - 1;
// //       }
// //       array[j + 1] = key;
// //     }
// //     setSorting(false);
// //   }

// //   async function swap(index1, index2) {
// //     setSwapping([index1, index2]);
// //     await new Promise(
// //       (resolve) => (timeoutRef.current = setTimeout(resolve, 500))
// //     );
// //     let temp = array[index1];
// //     array[index1] = array[index2];
// //     array[index2] = temp;
// //     setArray([...array]);
// //     setSwapping([]);
// //   }

// //   function stopSorting() {
// //     clearTimeout(timeoutRef.current);
// //     setSorting(false);
// //     setArray(generateRandomArray());
// //   }

// //   return (
// //     <>
// //       <div className="buttonContainer">
// //         <Button variant="contained" onClick={handleGenerateArray}>
// //           Generate Array
// //         </Button>
       
// //           <Button variant="contained" color="error" onClick={stopSorting}>
// //             Stop and Reset
// //           </Button>
       
// //             <Button variant="outlined" onClick={bubbleSort}>
// //               Bubble sort
// //             </Button>
// //             <Button variant="outlined" onClick={selectionSort}>
// //               Selection sort
// //             </Button>
// //             <Button variant="outlined" onClick={insertionSort}>
// //               Insertion sort
// //             </Button>
       
// //       </div>
// //       <div className="arrayCont">
// //         <div className="arrVal">
// //           {array.map((value, index) => (
// //             <div
// //               key={index}
// //               className={`bar ${swapping.includes(index) ? "swapping" : ""}`}
// //               style={{ height: `${value}px`, backgroundColor: "#0B0B61" }}
// //             ></div>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default RandomArrayGenerator;

import React, { useState } from 'react';
import './RandomArr.css';
import Button from '@mui/material/Button';
function RandomArrayGenerator() {
  const [array, setArray] = useState(generateRandomArray());
  const [swapping, setSwapping] = useState([]);

  function generateRandomArray() {
    const newArray = [];
    const length = Math.floor(Math.random() * 46) + 5;
    for (let i = 0; i < length; i++) {
      newArray.push(Math.floor(Math.random() * 300));
    }
    return newArray;
  }

  function handleGenerateArray() {
    setArray(generateRandomArray());
  }

  async function bubbleSort() {
    let len = array.length;
    let swapped = false;
    do {
      swapped = false;
      for (let i = 0; i < len; i++) {
        if (array[i] > array[i + 1]) {
          await swap(i, i + 1);
          swapped = true;
        }
      }
      len--;
    } while (swapped);
  }

  async function selectionSort() {
    for (let i = 0; i < array.length; i++) {
      let min_index = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min_index]) {
          min_index = j;
        }
      }
      if (min_index !== i) {
        await swap(i, min_index);
      }
    }
  }

  async function insertionSort() {
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        await swap(j + 1, j);
        j = j - 1;
      }
      array[j + 1] = key;
    }
  }

  async function swap(index1, index2) {
    setSwapping([index1, index2]);
    await new Promise(resolve => setTimeout(resolve, 500));
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    setArray([...array]);
    setSwapping([]);
  }

  return (
    <>
    <div>
      <Button variant="contained" onClick={handleGenerateArray}>Generate Array</Button>
      <Button variant="outlined" onClick={bubbleSort}>Bubble sort</Button>
      <Button variant="outlined" onClick={selectionSort}>Selection sort</Button>
      <Button variant="outlined" onClick={insertionSort}>Insertion sort</Button>
      
      </div>
      <div className="arrayCont">
        <div className="arrVal">
          {array.map((value, index) => (
            <div
              key={index}
              className={`bar ${swapping.includes(index) ? 'swapping' : ''}`}
              style={{ height: `${value}px`, backgroundColor: '#0B0B61' }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RandomArrayGenerator;


// import React, { useState } from 'react';
// import './RandomArr.css';
// import Button from '@mui/material/Button';

// function RandomArrayGenerator() {
//   const [array, setArray] = useState(generateRandomArray());
//   const [swapping, setSwapping] = useState([]);

//   function generateRandomArray() {
//     const newArray = [];
//     const length = Math.floor(Math.random() * 46) + 5;
//     for (let i = 0; i < length; i++) {
//       newArray.push(Math.floor(Math.random() * 300));
//     }
//     return newArray;
//   }

//   function handleGenerateArray() {
//     setArray(generateRandomArray());
//   }

//   async function bubbleSort() {
//     let len = array.length;
//     let swapped = false;
//     do {
//       swapped = false;
//       for (let i = 0; i < len; i++) {
//         if (array[i] > array[i + 1]) {
//           await swap(i, i + 1);
//           swapped = true;
//         }
//       }
//       len--;
//     } while (swapped);
//   }

//   async function selectionSort() {
//     for (let i = 0; i < array.length; i++) {
//       let min_index = i;
//       for (let j = i + 1; j < array.length; j++) {
//         if (array[j] < array[min_index]) {
//           min_index = j;
//         }
//       }
//       if (min_index !== i) {
//         await swap(i, min_index);
//       }
//     }
//   }

//   async function insertionSort() {
//     for (let i = 1; i < array.length; i++) {
//       let key = array[i];
//       let j = i - 1;
//       while (j >= 0 && array[j] > key) {
//         await swap(j + 1, j);
//         j = j - 1;
//       }
//       array[j + 1] = key;
//     }
//   }

//   async function swap(index1, index2) {
//     setSwapping([index1, index2]);
//     await new Promise(resolve => setTimeout(resolve, 500));
//     let temp = array[index1];
//     array[index1] = array[index2];
//     array[index2] = temp;
//     setArray([...array]);
//     setSwapping([]);
//   }

//   return (
//     <>
//       <div>
//         <Button variant="contained" onClick={handleGenerateArray}>Generate Array</Button>
//         <Button variant="outlined" onClick={bubbleSort}>Bubble sort</Button>
//         <Button variant="outlined" onClick={selectionSort}>Selection sort</Button>
//         <Button variant="outlined" onClick={insertionSort}>Insertion sort</Button>
//       </div>
//       <div className="arrayCont">
//         <div className="arrVal">
//           {array.map((value, index) => (
//             <div key={index} className={`bar ${swapping.includes(index) ? 'swapping' : ''}`}>
//               <div
//                 className="barValue"
//                 style={{ height: `${value}px`, backgroundColor: '#0B0B61' }}
//               >
//                 {value}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default RandomArrayGenerator;
