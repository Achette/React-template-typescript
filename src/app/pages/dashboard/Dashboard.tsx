import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";

export const Dashboard = () => {
 // const usuarioLogadoContext = useContext(UsuarioLogadoContext);
 // const { usuarioLogado } = useContext(UsuarioLogadoContext);

 const { nomeDoUsuario } = useUsuarioLogado()

  return (
    <div>
      <p>Dashboard</p>
      <p>{nomeDoUsuario}</p>
      <Link to="/entrar">Clique para login</Link>
    </div>
  );
};
