import { useEffect, useState } from "react";
import "./App.css";
import { getApiData } from "./network/lib/apiData";

function App() {
  const paths = ["service", "comments", "user", "product"];
  useEffect(() => {
    paths.forEach((path) => {
      getApiData(path).then((res) => {
        console.log(`${path}` , res.data);
      });
    });
  }, []);
  return (
    <div className="App">
      <h1>API Calling </h1>
      <button className="button">Get Service Data</button>
    </div>
  );
}

export default App;
