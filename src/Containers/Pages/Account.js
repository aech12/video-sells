import { useState } from "react";
import Account from "../../Components/Pages/Account";
import {
  changeAccEmail,
  changeAccPass,
  deleteAcc,
  cancelSub
} from "../../services/apicalls";
import { notifyErr } from "../../services/notify";
import { useInput } from "../../services/utils";
import { Redirect } from "react-router-dom";

const AccountPage = ({ user, setUser }) => {
  const new_email = useInput();
  const new_password = useInput();

  const changeEmail = async () => {
    const newUser = await changeAccEmail(
      user.username,
      new_email.value
    ).catch((e) => notifyErr(e));
    setUser(newUser);
  };

  const changePassword = async () => {
    const newUser = await changeAccPass(
      user.username,
      new_password.value
    ).catch((e) => notifyErr(e));
    console.log(newUser);
    setUser(newUser);
  };

  const cancelSubscription = () => {
    return cancelSub(user.subscriptionId)
      .then((r) => r)
      .then((cancelSubscriptionResponse) => {
        // Display to the user that the subscription has been cancelled.
      })
      .catch((e) => {
        console.log(e);
        notifyErr(e);
      });
  };

  const deleteAccount = async () => {
    console.log("deleting user");
    const deletedUser = await deleteAcc(user.username).catch((e) =>
      notifyErr(e)
    );
    console.log(deletedUser);
    // setUser(newUser);
  };

  const logOut = () => {
    window.localStorage.removeItem("loggedUser");
    setUser(null);
  };

  if (!user) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  return (
    <Account
      changeEmail={changeEmail}
      changePassword={changePassword}
      cancelSubscription={cancelSubscription}
      deleteAccount={deleteAccount}
      logOut={logOut}
      new_email={new_email}
      new_password={new_password}
    />
  );
};

export default AccountPage;
