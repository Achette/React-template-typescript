import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsuarioLogadoContext } from "../../shared/contexts";

export const Dashboard = () => {
  const usuarioLogadoContext = useContext(UsuarioLogadoContext);

  return (
    <div>
      <p>Dashboard</p>
      <p>{usuarioLogadoContext.nomeDoUsuario}</p>
      <Link to="/entrar">Clique para login</Link>
    </div>
  );
};
