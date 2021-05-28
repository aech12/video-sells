import { useState, useContext } from "react";
import Admin from "../../Components/Content/Admin";
import { addGirl, addVideo } from "../../services/apicalls_content";
import { notifyErr, notifySuccess } from "../../services/notify";
import { useInput } from "../../services/utils";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../services/reducers";

const AdminPage = ({ user, setUser }) => {
  const {
    authState: { auth }
  } = useContext(AuthContext);

  const submitGirl = async ({ name, birthday, profilePic }) => {
    const picture = new FormData();
    picture.append("file", profilePic[0]);

    try {
      const newGirl = await addGirl({
        name,
        birthday,
        picture
      });
      console.log(newGirl);
      notifySuccess("Model created!");
    } catch (e) {
      notifyErr(e);
    }
  };

  const submitVideo = async ({ title, href }) => {
    const video = new FormData();
    video.append("file", href[0]);

    try {
      const newVideo = await addVideo({
        title,
        video
      });
      console.log(newVideo);
      notifySuccess("Model created!");
    } catch (e) {
      notifyErr(e);
    }
  };

  if (!user) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  return (
    <>
      {auth === "admin" ? (
        <Admin
          submitGirl={submitGirl}
          submitVideo={submitVideo}
          // cancelSubscription={cancelSubscription}
          // deleteAccount={deleteAccount}
          // logOut={logOut}
          // new_email={new_email}
          // new_password={new_password}
        />
      ) : (
        <p style={{ textAlign: "center", padding: "15px" }}>
          You're not logged in as Administrator
        </p>
      )}
    </>
  );
};
// {
// <p>Log in as administrator</p>

export default AdminPage;
