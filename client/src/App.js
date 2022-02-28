import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./views/Profile";
import Friends from "./views/Friends";
import RegisterForm from "./components/RegisterForm";
//import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
