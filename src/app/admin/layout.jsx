"use client";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export default function AdminLayout({ children, login }) {
  const { auth } = useContext(AuthContext);
  return <>{auth.isLogg ? children : login};</>;
}
// mudar para true o auth.isLogg para poder realmente deslogar o usuario
// mudar para false o auth.isLogg para poder navegar para a pagina de login
//       para o usuario se logar
// lembrar que do jeito q esta agora, qdo tenta criar um novo usuario ele da erro porque
// ele tenta criar um usuario com as mesmas informacoes do ultimo usuario criado
// e nao faz o logout da forma correta
//
