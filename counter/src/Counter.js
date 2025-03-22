import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0); // count starts at 0

  return (
    <div className="buttons">
      <h1 className="label">{count}</h1> 
      <button className="button" onClick={() => setCount(count - 1)}>Decrease</button>&nbsp; &nbsp;
      <button className="button" onClick={() => setCount(count + 1)}>Increase</button><br></br><br></br><hr></hr>
      <button className="button" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;