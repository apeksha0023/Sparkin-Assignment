import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddAccountStep1 from "./pages/AddAccountStep1";
import AddAccountStep2 from "./pages/AddAccountStep2";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-account" element={<AddAccountStep1 />} />
      <Route path="/add-account-step-2" element={<AddAccountStep2 />} />

      
    </Routes>
  );
};

export default App;
