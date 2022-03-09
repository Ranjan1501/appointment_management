import "./App.css";
import Doctor from "./components/Doctor";
import { Routes, Route } from "react-router-dom";
import DoctorDetails from "./components/DoctorDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Doctor />}></Route>
        <Route path="//:id" element={<DoctorDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
