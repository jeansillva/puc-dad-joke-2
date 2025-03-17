import AuthService, { SignInParams, User } from "@src/services/AuthService";
import { createContext, ReactNode, useState } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextProps = {
  user: User | null;
  signin: (params: SignInParams) => void;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  // Adicione o restante do código para que seja possível disponibilizar uma função
  // de login e o usuário para o contexto de autenticação - Já foi feito

  //--------------------------------------------

  const [user, setUser] = useState<User | null>(null);

  const signin = ({ email, password }: SignInParams) => {
    AuthService.signin({ email, password })
      .then((userData) => {
        setUser(userData);
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  };

  const value = {
    user: user,
    signin: signin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}