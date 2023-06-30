import logo from './logo.svg';
import './App.css';
import Login from './Routes/login';
import Homepage from './Routes/homepage';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
        <div className="App d-flex">
          <Routes>
            <Route path="/" element={<Login />} exact />
            <Route path="/home" element={<Homepage />} />
          </Routes>
        </div>
    </>
  );
}

export default App;
