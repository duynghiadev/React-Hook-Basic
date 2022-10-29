import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("nghia");
  const [address, setAddress] = useState("");

  const handleEventClick = (event) => {
    setName(address);
  };

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Hello World with ReactJs and {name}</h1>
      <input
        type="text"
        value={address}
        onChange={(event) => handleOnchangeInput(event)}
      />
      <button type="button" onClick={(event) => handleEventClick(event)}>
        Click me
      </button>
    </div>
  );
};

export default App;
