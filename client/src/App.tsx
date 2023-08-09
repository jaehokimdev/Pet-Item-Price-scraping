import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
      ;
    </Routes>
  );
}

export default App;
