import MainInput from "./components/MainInput";

import { useState } from "react";


function App() {
  const [value, setValue] = useState('')

  const changeVal = (value) => {
    setValue(value)
  }

  return (
    <div className="App">
      <div>Value is: {value || '<Not set>'}</div>
      <MainInput onChange={changeVal} />
    </div>
  );
}

export default App;
