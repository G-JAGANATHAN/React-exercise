// import React, {useState, useEffect} from 'react';


// export const Child = ({count, setCount}) => {
// const [value, setValue] = useState(0);

// console.log('value', value);

// useEffect(()=>{
//   setValue(count);

//   return () => {
//     setCount(0);
//   }

// }, []);


// // on mount // []
// // on unmount // return ()=>{}
// // on change of a state or props // [state/props]

//   return <button>New Count: {value}</button>
// }
// import React from 'react';
// import { useState, useEffect } from 'react'
// import {Child} from './Child';

// function App() {
//   const [count, setCount] = useState(0)
//   const [maxLimit, setMaxLimit] = useState(null);
  
//   const styles = {
//     main: {
//       padding: '25px',
//     },
//     title: {
//       color: '#5C6AC4'
//     },
//   };

//   useEffect(()=>{
// setMaxLimit(count ===  5 ?"Max Limit reached!" : null);
// }, [count])

//   return (
//     <div style={styles.main}>
//       <h1 style={styles.title}>Hello, World!</h1>
//       <div>
//         <button onClick={() => setCount((count) => count + 1)}>
//           count {count}
//         </button>
// &nbsp;
//         <button onClick={() => setCount(0)}>
//           reset
//         </button>
//       </div>
//       {maxLimit}
//       {count >= 5 && <Child count={count} setCount={setCount} />}
//     </div>
//   )
// }

// export default App
