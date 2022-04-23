import { useState, createContext } from "react";
import useLocalStorage from "../servises/useLocalStorage.js";

const calcContext = createContext();

const CalcProvider = ({ children }) => {
  const [banks, setBanks] = useLocalStorage("banks", []);
  const [selectedBanks, setSelectedBanks] = useState(null);
  const value = { banks, setBanks, selectedBanks, setSelectedBanks };

  return <calcContext.Provider value={value}>{children}</calcContext.Provider>;
};

export { calcContext, CalcProvider };
