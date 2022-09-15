import { useState } from "react";
function App() {
  const [inpValue, setInpValue] = useState("");
  const handleInput = (event) => {
    const str = event.target.value;
    setInpValue(str.toUpperCase());
  };
  return (
    <>
      <div>
        {/* <button onClick={increment}>increment</button> */}

        <input type="text" onChange={handleInput} />
        {inpValue}
      </div>
    </>
  );
}

export default App;
