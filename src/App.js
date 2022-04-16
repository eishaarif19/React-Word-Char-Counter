import React, { useState } from "react";
import UserOutput from "./Components/UserOutput";
import UserInput from "./Components/UserInput";
import "./App.css";
import tealbg from './tealbg.jpg';

const App = () => {
  const [username, setUsername] = useState("eisha19");

  const changeHandler = (value) => {

    setUsername(value);
  };



  return (
    <div className="App" style={{
      backgroundImage: `url(${tealbg})`,
      backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
    }}>

      <div >

        <UserInput
          username={username}
          onChange={(value) => changeHandler(value)} />

        <div className="divStyle">
          <UserOutput id="1" username={username} />

          <UserOutput id="2" username={username} />

          <UserOutput id="3" username={username} />

          <UserOutput id="4" username={username} />
        </div>

      </div>
    </div>
  );
};

export default App;
