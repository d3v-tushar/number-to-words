import "./App.css";
import useTitle from "./Custom Hook/useTitle";
import { Converter, bnBD, enUS } from "any-number-to-words";
import { useState } from "react";

function App() {
  const [words, setWords] = useState(null);
  const [lang, setLang] = useState();
  useTitle("Number To Words");
  const convert = new Converter(lang);
  const handleNumberToWord = (e) => {
    const number = e.target.value;
    setWords(convert.toWords(number, { comma: true }));
  };

  const handleLanguage = (e) =>{
   if(e.target.checked){
    setLang(bnBD)
   }
   else{
    setLang(enUS)
   }
  };

  return (
    <div className="App">
      <div className="mockup-phone border-primary">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 px-5">
            <input
              onChange={handleNumberToWord}
              type="text"
              placeholder="Please input a Number"
              className="input input-bordered input-success w-full max-w-xs px-auto"
            />
            <h2 className="text-xl font-semibold mt-4">{words}</h2>
            <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text text-xl mx-2">Bangla?</span>
              <input onClick={handleLanguage}
                type="checkbox"
                className="checkbox checkbox-success"
              />
            </label>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
