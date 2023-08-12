import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Totalresult from "./pages/Totalresult";
import Petsmart from "./pages/Petsmart";
import Petvalue from "./pages/Petvalue";
import Walmart from "./pages/Walmart";
import Canadiantire from "./pages/Canadiantire";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="search" element={<Layout />}>
        <Route path="totalresult" element={<Totalresult />} />
        <Route path="petsmart" element={<Petsmart />} />
        <Route path="petvalue" element={<Petvalue />} />
        <Route path="walmart" element={<Walmart />} />
        <Route path="canadiantire" element={<Canadiantire />} />
      </Route>
    </Routes>
  );
}

export default App;
