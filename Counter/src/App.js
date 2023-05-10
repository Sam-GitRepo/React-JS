import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="name">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
