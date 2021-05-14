import { useState, useEffect } from "react";
import { usePageinfo } from "../../services/utils";
import DisplayGallery from "../../Components/Content/DisplayGallery";
import Paginate from "../Paginate";
import { baseUrl } from "../../services/utils";

const GirlsPage = () => {
  const girlsPage = usePageinfo();
  const elementsPerPage = 5;
  const serverGetEndpoint = ``;
  const pageToRedirectTo = `${baseUrl}/model`;
  // https://www.youtube.com/watch?v=UrjulNmBlYk&list=PLAs_HEWTa8AYMs0oXb6WN2_-gRVFVKcAO&index=306

  return (
    <>
      <DisplayGallery
        galleryHeader={"Models"}
        galleryObjects={girlsPage.data.pageElements}
      />
      <Paginate
        data={girlsPage.data}
        setdata={girlsPage.setdata}
        perPage={elementsPerPage}
        serverGetEndpoint={serverGetEndpoint}
        pageToRedirectTo={pageToRedirectTo}
      />
    </>
  );
};

export default GirlsPage;
