import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Hello World with ReactJs</h1>
    </div>
  );
};

export default App;
