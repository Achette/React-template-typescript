import { BrowserRouter, Navigate, Route, Routes as Switch } from "react-router-dom";
import { Dashboard, Login, Lista } from "../pages";
import {  } from "../pages/dashboard/Lista";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/entrar"  element={<Login /> } />
        <Route path="/pagina-inicial"  element={<Dashboard /> } />
        <Route path="/lista"  element={<Lista /> } />

        <Route path="*"  element={<Navigate to="/pagina-inicial" /> } />
      </Switch>
    </BrowserRouter>
  );
};
