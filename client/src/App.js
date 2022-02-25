import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App flex flex-col items-center">
      <Nav />
      <SearchBar />
      <Card />
    </div>
  );
}

export default App;
