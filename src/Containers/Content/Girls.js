import { useState, useEffect } from "react";
import DisplayGallery from "../../Components/Content/DisplayGallery";
import Paginate from "../Paginate";
import { usePageinfo } from "../../services/utils";

const VideoPage = () => {
  const girlsPage = usePageinfo();
  const elementsPerPage = 5;
  const serverGetEndpoint = "";
  // https://www.youtube.com/watch?v=UrjulNmBlYk&list=PLAs_HEWTa8AYMs0oXb6WN2_-gRVFVKcAO&index=306

  return (
    <>
      GIRLS PAGE
      <DisplayGallery
        galleryHeader={"Models"}
        galleryObjects={girlsPage.data.pageElements}
      />
      <Paginate
        data={girlsPage.data}
        setdata={girlsPage.setdata}
        perPage={elementsPerPage}
        serverGetEndpoint={serverGetEndpoint}
      />
    </>
  );
};

export default VideoPage;
