// src/components/Stopwatch.jsx

import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    /*Complete the missing code*/
    let id = setInterval(()=>{
      setCount((prev)=>{
        if(prev===9){
          clearInterval(id);
        }
        return prev+1;
      })
    },1000)
    return ()=>{clearInterval(id)};
  },[]);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;