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
    let number = e.target.value;
    if(number.length < 1){
      setWords('No Integer Found!')
    }
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
          <h2 className="text-xl font-semibold my-4">{words}</h2>
            <input
              onChange={handleNumberToWord}
              type="text"
              placeholder="Please Input Number To Convert"
              className="input input-bordered input-info w-full max-w-xs px-auto"
            />
            <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text text-xl mx-2">Bangla?</span>
              <input onClick={handleLanguage}
                type="checkbox"
                className="checkbox checkbox-info"/>
            </label>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
