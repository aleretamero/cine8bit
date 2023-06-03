import { ReactNode, createContext } from 'react';
import usePersistedState from '../hooks/usePersistedState';

export type TypeThemeContext = {
  themeStorage: boolean;
  toggleTheme?: () => void;
};

export const GlobalContext = createContext<TypeThemeContext | undefined>(
  undefined
);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [themeStorage, setThemeStorage] = usePersistedState('@theme', false);

  const toggleTheme = () => {
    setThemeStorage(!themeStorage);
  };

  return (
    <GlobalContext.Provider value={{ themeStorage, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
