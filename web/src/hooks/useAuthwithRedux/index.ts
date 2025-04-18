import AuthService from "@src/services/AuthService";
import { addUser, selectUser } from "@src/slices/user";
import { useDispatch, useSelector } from "react-redux";

export function useAuthWithRedux() {
  const user = useSelector(selectUser);  
  
  // Obtenha o usuário autenticado utilizando o hook useSelector.
  const dispatch = useDispatch();
  console.log(user);
  
  async function signin({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const authenticatedUser = await AuthService.signin({ email, password });
    // Adicione o usuário autenticado ao estado global  utilizando o dispatch a e action addUser
    dispatch(addUser(authenticatedUser));
  }

  return { signin, user };
}