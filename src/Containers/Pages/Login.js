import { useContext } from "react";
import LoginForm from "../../Components/Pages/LoginForm";
import { login } from "../../services/apicalls";
import { notifyErr } from "../../services/notify";
import { setToken } from "../../services/utils";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../services/reducers";

const LoginPage = ({ setUser, user }) => {
  // const { authDispatch, isAuthenticated, value } = useContext(AuthContext);
  const { authDispatch } = useContext(AuthContext);

  const handleLogin = async (credentials) => {
    try {
      const response = await login(credentials);
      const loggedUser = await response.data;

      if (loggedUser) {
        setToken(loggedUser.token);
        window.localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        setUser(credentials);
        authDispatch({ type: loggedUser.role });
      }
    } catch (exception) {
      notifyErr("Wrong email/password");
    }
  };

  // console.log(value);

  if (user) {
    return <Redirect to={{ pathname: "/" }} />;
    // return (
    //   <>
    //     {/* p state: {value} */}
    //     {/* p state: {isAuthenticated} {value} */}
    //     {/* <button onClick={() => value.authDispatch({ type: "admin" })}>
    //       more
    //     </button>{" "} */}
    //   </>
    // );
  }

  return <LoginForm handleLogin={handleLogin} />;
};

export default LoginPage;
