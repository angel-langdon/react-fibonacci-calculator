import "./App.css";
import IntegerInput from "./IntegerInput";
import CalculationResult from "./CalculationResult";
import { useState } from "react";
import { Fibonacci } from "../utils";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(undefined);

  async function handleCalculateButtonClick(_) {
    // we make the function async to prevent
    // freezing the UI
    setResult(Fibonacci(inputValue));
  }
  return (
    <div className="App-container column">
      <div className="column horizontal-center">
        <h1>Fibonacci Calculator</h1>
        <IntegerInput
          value={inputValue}
          setValue={setInputValue}
          setResult={setResult}
        />
        <button
          onClick={handleCalculateButtonClick}
          style={{ maxWidth: 100, marginTop: 10 }}
        >
          Calculate Fibonacci
        </button>
      </div>
      <CalculationResult result={result} />
    </div>
  );
}

export default App;
