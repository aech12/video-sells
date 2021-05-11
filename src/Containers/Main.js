import Hero from "../Components/Hero";
import TopVideos from "./TopVideos";
import { useState, useEffect } from "react";

const Main = ({ location }) => {
  const [subscription, setSubscription] = useState();

  // DOESNT HAVE TO BE USEFFECT, FIX
  useEffect(() => {
    if (location.state) {
      setSubscription(location.state.subscription);
      console.log(subscription, "Main subscription from Payment");
    }
  }, [subscription, location.state]);

  return (
    <>
      <Hero />
      <TopVideos />
    </>
  );
};

export default Main;
