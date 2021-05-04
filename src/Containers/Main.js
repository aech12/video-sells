import Hero from "../Components/Hero";
import TopVideos from "./TopVideos";
import { useState, useEffect } from "react";

const Main = ({ location }) => {
  const [subscription, setSubscription] = useState();

  useEffect(() => {
    if (location.state) {
      console.log(subscription, "full props");
      setSubscription(location.state.subscription);
    }
  }, [subscription]);

  return (
    <>
      <Hero />
      <TopVideos />
    </>
  );
};

export default Main;
