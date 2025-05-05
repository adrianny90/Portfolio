import { createContext, useState, useEffect } from "react";
export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(true);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
export default LanguageProvider;
