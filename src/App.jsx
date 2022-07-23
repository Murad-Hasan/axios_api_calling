import { useEffect, useState } from "react";
import "./App.css";
import { getService } from "./network/lib/service";

function App() {
  const [getServiceData, setGetServiceData] = useState([]);

  useEffect(() => {
    getService().then(function (response) {
      setGetServiceData(response.data);
    });
  }, []);

  console.log(getServiceData);
  return (
    <div className="App">
      <h1>API Calling </h1>
      <button className="button">
        Get Service Data
      </button>
    </div>
  );
}

export default App;
