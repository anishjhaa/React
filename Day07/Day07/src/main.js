import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./Component/Colorful";

// Background color changer
// color = black
// re-render: Call the function again
// setColor("red")
//  useEffect

// setCount(3)

function Main() {
  const [color, setColor] = useState("black");

  console.log("render"); //same color pe 2 bar se zada render ni ho skta yeh sirf primitive value k saath krta h object k saath nhi, as object pass by reference hota h (called as bail out) primitive ko issliye choda kyuki overhead bdh rha tha
  document.body.style.backgroundColor = color;

  return (
    <>
      <h1>Background color changer</h1>
      <div className="but">
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => {
            setColor("red");
          }}
        >
          red
        </button>
        <button
          style={{ backgroundColor: "Blue" }}
          onClick={() => {
            setColor("Blue");
          }}
        >
          Blue
        </button>
        <button
          style={{ backgroundColor: "Orange" }}
          onClick={() => {
            setColor("Orange");
          }}
        >
          Orange
        </button>
        <button
          style={{ backgroundColor: "Green" }}
          onClick={() => {
            setColor("Green");
          }}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: "Pink" }}
          onClick={() => {
            setColor("Pink");
          }}
        >
          Pink
        </button>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main></Main>);
// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
// import Colorful from "./Component/Colorful";

// // Background color changer
// // color = black
// // re-render: Call the function again
// // setColor("red")
// //  useEffect

// // setCount(3)

// function Main() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div className="counter">
//         <h1>Counter is: {count}</h1>
//         <button
//           onClick={() => {
//             setCount(count + 1);
//           }}
//           style={{ backgroundColor: "blue" }}
//         >
//           Increment
//         </button>
//       </div>

//       <Colorful name={count}></Colorful>
//     </>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Main></Main>);
