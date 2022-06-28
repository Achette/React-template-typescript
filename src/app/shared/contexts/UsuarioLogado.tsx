import { createContext, useCallback } from "react";

interface IUsuarioLogadoProviderData {
  nomeDoUsuario: string;

  logout: () => void
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoProviderData>({} as IUsuarioLogadoProviderData);


interface IUsuarioLogadoProviderProps {
    children: React.ReactNode;
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {

  const handleLogout = useCallback(() => {
    console.log('Logout executou')
  }, [])
  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Igor', logout: handleLogout }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
