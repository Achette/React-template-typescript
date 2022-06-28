import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoProviderData {
  nomeDoUsuario: string;

  logout: () => void
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoProviderData>({} as IUsuarioLogadoProviderData);


interface IUsuarioLogadoProviderProps {
    children: React.ReactNode;
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {

  const [nome, setNome] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setNome('Igor')
    }, 2000)
  })

  const handleLogout = useCallback(() => {
    console.log('Logout executou')
  }, [])

  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logout: handleLogout }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
