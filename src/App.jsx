import { useState } from "react";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState([]);

  


  return (
    <div className="App">
      <h1>API Calling </h1>
      <button className="button" onClick={() => getData()}>Get Data</button>
    </div>
  );
}

export default App;
