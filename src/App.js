import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";
import Todo from "./views/Todo";

const App = () => {
  const [name, setName] = useState("nghia");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "watching TV", type: "DN" },
    { id: "todo2", title: "doing homework", type: "Basil" },
    { id: "todo3", title: "playing game", type: "DN" },
    { id: "todo4", title: "reading book", type: "Basil" },
  ]);

  const handleEventClick = (event) => {
    if (!address) {
      alert("Empty input");
      return;
    }
    // hook not merge state
    // ...spread syntax array js
    let newTodo = {
      id: Math.floor(Math.random() * 100000 + 1),
      title: address,
      type: "DN",
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value);
  };

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = todos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Hello World with ReactJs and {name}</h1>

      <Todo todos={todos} title={"All todo"} deleteDataTodo={deleteDataTodo} />

      <Todo
        todos={todos.filter((item) => item.type === "DN")}
        title={`DN's todo`}
        deleteDataTodo={deleteDataTodo}
      />

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
