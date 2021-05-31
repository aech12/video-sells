import Hero from "../Components/Hero";
import TopVideos from "./TopVideos";
import RecentVideos from "./RecentVideos";
import { useState, useEffect } from "react";

const Main = ({ location }) => {
  const [subscription, setSubscription] = useState();
  const elementsPerPage = 8;
  const offset = 0;

  // DOESNT HAVE TO BE USEFFECT, FIX
  useEffect(() => {
    if (location.state) {
      setSubscription(location.state.subscription);
      console.log(subscription, "Main subscription from Main");
    }
  }, [subscription]);

  return (
    <>
      <Hero />
      <TopVideos elementsPerPage={elementsPerPage} offset={offset} />
      <RecentVideos elementsPerPage={elementsPerPage} offset={offset} />
    </>
  );
};

export default Main;
