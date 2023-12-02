import Main from "./components/Main";
import Nav from "./components/Nav";
import "./App.css";
import { data } from "./data";

function App() {
  return (
    <div>
      <Nav />
      <div className="title-div">
        <h1 className="animation">ARE CURIOUS ABOUT YOUR LIFE?</h1>
      </div>
      <Main data={data} />
    </div>
  );
}

export default App;
