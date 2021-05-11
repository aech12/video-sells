import LoginForm from "../../Components/LoginForm";
import { login } from "../../services/apicalls";
import { notifyErr } from "../../services/notify";
import { setToken } from "../../services/utils";
import { Redirect } from "react-router-dom";

const LoginPage = ({ setUser, user }) => {
  const handleLogin = async (credentials) => {
    try {
      const response = await login(credentials);
      const loggedUser = await response.data;

      if (loggedUser) {
        setToken(loggedUser.token);
        window.localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        setUser(credentials);
      }
    } catch (exception) {
      notifyErr("Wrong email/password");
    }
  };

  if (user) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  return <LoginForm handleLogin={handleLogin} />;
};

export default LoginPage;
