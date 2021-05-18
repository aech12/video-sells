import { useState, useEffect } from "react";
import { usePageinfo } from "../../services/utils";
import DisplayGallery from "../../Components/Content/DisplayGallery";
import Paginate from "../Paginate";
import { baseUrl } from "../../services/utils";
import { getAllGirls } from "../../services/apicalls_content";

const GirlsPage = () => {
  const [girls, setgirls] = useState([]);
  const [totalGirls, settotalGirls] = useState(0);
  const elementsPerPage = 5;
  const serverGetEndpoint = ``;
  const pageToRedirectTo = `${baseUrl}/model`;
  // https://www.youtube.com/watch?v=UrjulNmBlYk&list=PLAs_HEWTa8AYMs0oXb6WN2_-gRVFVKcAO&index=306

  const setData = (offset) => {
    getAllGirls({ limit: elementsPerPage, offset })
      .then((r) => {
        const fetchedGirls = r.pageElements.map((girl) => {
          return { id: girl.id, name: girl.name, picture: girl.picture };
        });
        setgirls(fetchedGirls);
        console.log("dream", fetchedGirls);
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
      <DisplayGallery
        galleryHeader={"Models"}
        galleryObjects={girls}
        pageToRedirectTo={pageToRedirectTo}
      />
      <Paginate
        setData={setData}
        perPage={elementsPerPage}
        serverGetEndpoint={serverGetEndpoint}
        totalGirls={totalGirls}
      />
    </>
  );
};

export default GirlsPage;
