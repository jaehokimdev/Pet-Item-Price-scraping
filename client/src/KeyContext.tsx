import { createContext } from "react";

type UserContextType = {
  keyInfo: string | null;
  setKeyInfo: React.Dispatch<React.SetStateAction<string | null>>;
};

const iUserContextState = {
  keyInfo: "",
  setKeyInfo: () => {},
};

const UserContext = createContext<UserContextType>(iUserContextState);

export default UserContext;
