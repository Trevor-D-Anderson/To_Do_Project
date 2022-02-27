import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div className="App flex flex-col items-center">
      {/* <Nav />
      <SearchBar />
      <Card /> */}
      <RegisterForm />
    </div>
  );
}

export default App;
