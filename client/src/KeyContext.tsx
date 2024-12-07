import { createContext } from "react";

type UserContextType = {
  keyInfo: string | null;
  setKeyInfo: React.Dispatch<React.SetStateAction<string | null>>;
  petsmartInfo: string[] | null;
  setPetsmartInfo: React.Dispatch<React.SetStateAction<string[] | null>>;
  petValuInfo: string[] | null;
  setPetValuInfo: React.Dispatch<React.SetStateAction<string[] | null>>;
  walmartInfo: string[] | null;
  setWalmartInfo: React.Dispatch<React.SetStateAction<string[] | null>>;
  canadiantireInfo: string[] | null;
  setCanadiantireInfo: React.Dispatch<React.SetStateAction<string[] | null>>;
};

const iUserContextState = {
  keyInfo: "",
  setKeyInfo: () => {},
  petsmartInfo: [],
  setPetsmartInfo: () => {},
  petValuInfo: [],
  setPetValuInfo: () => {},
  walmartInfo: [],
  setWalmartInfo: () => {},
  canadiantireInfo: [],
  setCanadiantireInfo: () => {},
};

const UserContext = createContext<UserContextType>(iUserContextState);

export default UserContext;
