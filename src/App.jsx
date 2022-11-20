import "./App.css";
import useTitle from "./Custom Hook/useTitle";
import { Converter } from "any-number-to-words";
import { useState } from "react";

function App() {
  const [words, setWords] = useState(null);
  useTitle("Number To Words");
  const convert = new Converter();
  const handleNumberToWord = (e) => {
    const number = e.target.value;
    setWords(convert.toWords(number, {comma: true}));
  };
  return (
    <div className="App">
      <div className="mockup-phone border-primary">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 px-5">
          <input onChange={handleNumberToWord} type="text" placeholder="Please input a Number" className="input input-bordered input-success w-full max-w-xs px-auto" />
            <h2 className="text-xl font-semibold mt-4">{words}</h2></div>
        </div>
      </div>
    </div>
  );
}

export default App;
