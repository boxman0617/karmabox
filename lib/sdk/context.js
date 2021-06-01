import { useContext, createContext } from "react";
import { SDK } from "./";

export const Context = createContext(new SDK());

export const useSDK = () => useContext(Context);
