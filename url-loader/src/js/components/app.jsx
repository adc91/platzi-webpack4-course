import React, { useState } from "react";
import data from "./data.json";
import Loader from "./loader";

import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

function App() {
  const [loaderList, setLoaderList] = useState([]);

  function handleClick() {
    setLoaderList(data.loaders);
  }

  return (
    <div>
      <div>
        <img src={logo} width={100} />
        <ul>
          {loaderList.map((item) => (
            <Loader {...item} key={item.id} />
          ))}
        </ul>
        <button onClick={handleClick}>Mostrar Loaders</button>
      </div>
      <br></br>
      <div>
        <video src={video} width={360} controls poster={logo} />
      </div>
    </div>
  );
}

export default App;
