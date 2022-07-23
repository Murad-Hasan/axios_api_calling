import { useEffect, useState } from "react";
import "./App.css";
import { getApiData } from "./network/lib/apiData";

function App() {
  const paths = ["service", "comments", "user", "product"];
  const [serviceData, setServiceData] = useState([]);
  const [userData, setUserData] = useState([]);

    function getDataByPath(path) {
      getApiData(path).then((res) => {
        switch (path) {
          case "service":
            setServiceData(res.data);
            break;
          case "user":
            setUserData(res.data);
            break;
          default:
            break;
        }
      });
    }

  console.log(userData);

  return (
    <div className="App">
      <h1>API Calling </h1>
      <button className="button" onClick={() => getDataByPath(paths[0])}>
        Get Service Data
      </button>
      {serviceData.map((data, index) => {
        return (
          <div key={index}>
            <h2>{data.title}</h2>
          </div>
        );
      })}
      <button className="button" onClick={() => getDataByPath(paths[2])}>
        Get User Data
      </button>
      {userData.map((data, index) => {
        return (
          <div key={index}>
            <h2>{data.username}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
