import { useState, useEffect } from "react";
import DisplayGallery from "../Components/Content/DisplayGallery";

const Main = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    let fetchVideos = [];
    for (let i = 0; i < 4; i++) {
      fetchVideos[i] = { url: "", name: "name" };
    }
    setVideos(fetchVideos);
  }, [0]);
  // console.log("VIDEOS", videos, videos.length);

  return (
    <>
      <DisplayGallery galleryHeader={"Top Videos"} galleryObjects={videos} />
    </>
  );
};

export default Main;
