import { createContext, useEffect, useState } from "react";

<<<<<<< HEAD
export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children})=>{
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false
    );

    const toggle = ()=>{
        setDarkMode(!darkMode)
    }

    useEffect(()=>{
        localStorage.setItem("darkMode", darkMode)
    },[darkMode])

    return (
        <DarkModeContext.Provider value={{darkMode, toggle}}>{children}</DarkModeContext.Provider>
    )
};
=======
export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
>>>>>>> ef40cc4537ab40fa5ed62a2216fb3f2c2746ebfb
