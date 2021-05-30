import { useState } from "react";
import DisplayGallery from "../../Components/Content/DisplayGallery";
import Paginate from "../Paginate";
import { getRecentVideos } from "../../services/apicalls_content";

const GirlsPage = () => {
  const [videos, setvideos] = useState([]);
  const pageToRedirectTo = `/video`;
  // let totalGirlsInDB = 1;
  const [pageCount, setpageCount] = useState(1);

  const setData = (elementsPerPage, offset) => {
    getRecentVideos({ limit: elementsPerPage, offset })
      .then((r) => {
        const fetchedVideos = r.pageElements.map((video) => {
          return { id: video.id, name: video.title, picture: video.picture };
        });
        pageCount !== 1 ||
          setpageCount(Math.ceil(r.totalCount / elementsPerPage));
        setvideos(fetchedVideos);
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
      <DisplayGallery
        galleryHeader={"Top Videos"}
        galleryObjects={videos}
        pageToRedirectTo={pageToRedirectTo}
      />
      <Paginate
        setData={setData}
        // totalElements={totalGirlsInDB}
        pageCount={pageCount}
        setpageCount={setpageCount}
      />
    </>
  );
};

export default GirlsPage;
