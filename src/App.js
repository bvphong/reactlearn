import logo from "./logo.svg";
import "./App.css";
import Side from "./component/sidebar/side";
import "./index.css";

function App(props) {
  const { diss } = props;

  return (
    <div className="App">
      <div className="sidebar">
        <Side></Side>
      </div>
    </div>
  );
}

export default App;
