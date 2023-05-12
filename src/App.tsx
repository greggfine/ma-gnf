import { useState } from "react";
import "./App.css";

function App() {
  const [count] = useState(0);

  return (
    <>
      <h1>{count}</h1>
    </>
  );
}

export default App;
