import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";

const App = () => {
  const handleEventClick = (event) => {
    console.log(">>> Click me", event.target.value);
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Hello World with ReactJs</h1>
      <input
        type="text"
        value="basil"
        onClick={(event) => {
          handleEventClick(event);
        }}
      />
      <button
        type="button"
        onClick={(event) => {
          handleEventClick(event);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
