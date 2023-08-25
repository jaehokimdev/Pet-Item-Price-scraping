import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Totalresult from "./pages/Totalresult";
import Petsmart from "./pages/Petsmart";
import Petvalue from "./pages/Petvalue";
import Walmart from "./pages/Walmart";
import Canadiantire from "./pages/Canadiantire";
import Layout from "./Layout";
import { useState } from "react";
import UserContext from "./KeyContext";

function App() {
  const [keyInfo, setKeyInfo] = useState<string | null>(null);
  const [petsmartInfo, setPetsmartInfo] = useState<string[] | null>(null);
  const [petValuInfo, setPetValuInfo] = useState<string[] | null>(null);
  const [walmartInfo, setWalmartInfo] = useState<string[] | null>(null);
  const [canadiantireInfo, setCanadiantireInfo] = useState<string[] | null>(
    null
  );
  return (
    <UserContext.Provider
      value={{
        keyInfo,
        setKeyInfo,
        petsmartInfo,
        setPetsmartInfo,
        petValuInfo,
        setPetValuInfo,
        walmartInfo,
        setWalmartInfo,
        canadiantireInfo,
        setCanadiantireInfo,
      }}
    >
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="search" element={<Layout />}>
          <Route path="all/:keyword" element={<Totalresult />} />
          <Route path="petsmart/:keyword" element={<Petsmart />} />
          <Route path="petvalue/:keyword" element={<Petvalue />} />
          <Route path="walmart/:keyword" element={<Walmart />} />
          <Route path="canadiantire/:keyword" element={<Canadiantire />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
