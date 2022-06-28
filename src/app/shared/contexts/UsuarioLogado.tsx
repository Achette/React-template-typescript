import { createContext } from "react";

interface IUsuarioLogadoProviderData {
  nomeDoUsuario: string;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoProviderData>({} as IUsuarioLogadoProviderData);


interface IUsuarioLogadoProviderProps {
    children: React.ReactNode;
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {
  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Igor' }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
