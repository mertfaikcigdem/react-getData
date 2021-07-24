import "./App.css";
import GetData from "./lib/service";

function App() {
  return <div className="App">{console.log(GetData(2))}</div>;
}

export default App;
