import logo from "./logo.svg";
import "./App.css";

const App = () => {
  let name = "Duy Nghia";
  let number = 2022;
  let obj = { name: "Nghia", chanel: "DuyNghia" };

  return (
    <div className="App">
      {console.log("Object: ", obj)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>
        Hello World with React and {name} in {number}
      </h1>
      <p>{JSON.stringify(obj)}</p>
    </div>
  );
};

export default App;
