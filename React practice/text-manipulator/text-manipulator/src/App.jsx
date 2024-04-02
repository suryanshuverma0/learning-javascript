import "./App.css";
import InputField from "./InputField";
import Functionality from "./Components/Functionality";
import { useState } from "react";
function App() {
 
  const [inputValue , setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  }

  return (
    <>
      <div className="flex justify-center items-center h-[40vh]">
        <InputField onInputChange ={handleInputChange} />
      </div>
    
      <div>
        <Functionality value ={inputValue} />
      </div>
    </>
  );
}

export default App;
