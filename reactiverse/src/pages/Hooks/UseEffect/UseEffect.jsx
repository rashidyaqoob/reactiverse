import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [resourceType, setResourceType] = useState("posts");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Counter value: ", counter, "resourceType", resourceType);
  });

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Posts</button>
      <button onClick={() => setResourceType("Posts2")}>Posts 2</button>
      <button onClick={() => setResourceType("Posts3")}>Posts 3</button>
    </>
    // <div>
    //
    // </div>
    // <h1>{resourceType}</h1>
  );
}

// import { useEffect, useState } from "react";

// const UseEffect = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [windowHeight, setWindowHeight] = useState(window.innerHeight);
//   const [buttonType, setButtonType] = useState();
//   c

//   useEffect(() => {
//     console.log("render");
//   }, [buttonType]);
//   return (
//     // <div className="hook-use-effect">
//     //     <div className="hook-use-effect__uses">
//     //       <h1>Uses Of UseEffect</h1>
//     //       <ul>
//     //         <li>we want to run some code after the DOM has been updated. It can be anything, showing pop-ups, sending API requests, logging users’ information etc. and such functions don’t require cleanup to be performed. They are just hit-once functions and then we forget about them</li>
//     //         <li></li>
//     //       </ul>
//     //     </div>
//     //     Window Width: <h2>{windowWidth}</h2>
//     //     Window Height: <h2>{windowHeight}</h2>
//     // </div>
//     <>
//       <button
//         onClick={() => {
//           setButtonType("Click0");
//           console.log("Click0");
//         }}
//       >
//         Click1
//       </button>
//       <button
//         onClick={() => {
//           setButtonType("Click1");
//           console.log("Click1");
//         }}
//       >
//         Click2
//       </button>
//       <button
//         onClick={() => {
//           setButtonType("Click2");
//           console.log("Click2");
//         }}
//       >
//         Click3
//       </button>
//       <button
//         onClick={() => {
//           setButtonType("Click3");
//           console.log("Click3");
//         }}
//       >
//         Click4
//       </button>
//     </>
//   );
// };

// export default UseEffect;
