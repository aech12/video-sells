import { useState, useEffect } from "react";
import DisplayGallery from "../Components/Content/DisplayGallery";
import { getRecentVideos } from "../services/apicalls_content";
import { baseUrl } from "../services/utils";

const RecentVideos = ({ elementsPerPage, offset }) => {
  const [videos, setVideos] = useState([]);
  const pageToRedirectTo = `${baseUrl}/video`;

  useEffect(() => {
    getRecentVideos({ limit: elementsPerPage, offset })
      .then((r) => {
        const fetchedVideos = r.pageElements.map((video) => {
          return { id: video.id, name: video.title, picture: video.picture };
        });
        setVideos(fetchedVideos);
      })
      .catch((e) => console.error(e));
  }, [0]);

  return (
    <>
      <DisplayGallery
        galleryHeader={"Recent Videos"}
        galleryObjects={videos}
        pageToRedirectTo={pageToRedirectTo}
      />
    </>
  );
};

export default RecentVideos;
