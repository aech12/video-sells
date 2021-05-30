import { useState, useEffect } from "react";
import { usePageinfo } from "../../services/utils";
import DisplayGallery from "../../Components/Content/DisplayGallery";
import Paginate from "../Paginate";
import { baseUrl } from "../../services/utils";
import { getAllGirls } from "../../services/apicalls_content";

const GirlsPage = () => {
  const [girls, setgirls] = useState([]);
  const [totalGirlsInDB, settotalGirlsInDB] = useState(0);
  const pageToRedirectTo = `/model`;

  const setData = (elementsPerPage, offset) => {
    getAllGirls({ limit: elementsPerPage, offset })
      .then((r) => {
        const fetchedGirls = r.pageElements.map((girl) => {
          return { id: girl.id, name: girl.name, picture: girl.picture };
        });
        setgirls(fetchedGirls);
        settotalGirlsInDB(r.totalCount);
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
      <Paginate setData={setData} totalElements={totalGirlsInDB} />
    </>
  );
};

export default GirlsPage;
