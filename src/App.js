import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";
import Todo from "./views/Todo";

const App = () => {
  const [name, setName] = useState("nghia");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "watching TV" },
    { id: "todo2", title: "doing homework" },
    { id: "todo3", title: "playing game" },
  ]);

  const handleEventClick = (event) => {
    if (!address) {
      alert("Empty input");
      return;
    }
    // hook not merge state
    // ...spread syntax array js
    let newTodo = { id: "abc", title: address };
    setTodos([...todos, newTodo]);
    setAddress("");
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
      <Todo myData={todos} title={"ALl todo"} />
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
