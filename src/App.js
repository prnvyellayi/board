import logo from './logo.svg';
import './App.css';
import Login from './Routes/login';
import Homepage from './Routes/homepage';
import SignUp from './Routes/signUp';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
        <div className="App d-flex">
          <Routes>
            <Route path="/" element={<Login />} exact />
            <Route path="/home" element={<Homepage />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </div>
    </>
  );
}

export default App;
