//import { useNavigate } from "react-router-dom";

import { useCallback, useMemo, useState, useRef } from "react";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";
import { useUsuarioLogado } from "../../shared/hooks";

export const Login = () => {
  /*   const history = useNavigate();

  const handleClick = () => {
    history("./pagina-inicial");
  }; */
  const inputPassworRef = useRef<HTMLInputElement>(null);
  const {nomeDoUsuario} = useUsuarioLogado();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const emailLength = useMemo(() => {
    return email.length * 1000;
  }, [email.length]);

  /*   useEffect(() => {
    console.log(email);
  }, [email]);

  useEffect(() => {
    console.log(senha);
  }, [senha]); */

  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(senha);
    console.log(inputPassworRef.current);
  }, [email, senha]);

  return (
    <div>
      <form>
        <p>Quantidade de caracteres no email: {emailLength}</p>
        <p>{nomeDoUsuario}</p>
        <InputLogin
          label="Email"
          value={email}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputPassworRef.current?.focus()}
        />

        {/*  <label>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' ? inputPassworRef.current?.focus() : undefined}
          />
        </label> */}

        <InputLogin
          type="password"
          label="Senha"
          value={senha}
          ref={inputPassworRef}
          onChange={(newValue) => setSenha(newValue)}
          onPressEnter={() => handleEntrar()}
        />

        {/* <label>
          <span>Senha</span>
          <input
            type="password"
            value={senha}
            ref={inputPassworRef}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label> */}

        {/*    <button type="button" onClick={handleEntrar}>
          Entrar
        </button> */}

        <ButtonLogin type="button" onClick={handleEntrar}>
          Entrar
        </ButtonLogin>
        <ButtonLogin type="button" onClick={handleEntrar}>
          Cadastre-se
        </ButtonLogin>
      </form>
    </div>
  );
};
