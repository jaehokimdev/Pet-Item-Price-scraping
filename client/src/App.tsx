import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="search" element={<Main />} />;
    </Routes>
  );
}

export default App;
