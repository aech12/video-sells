import { useState, useEffect } from "react";
import { usePageinfo } from "../../services/utils";
import DisplayGallery from "../../Components/Content/DisplayGallery";
import Paginate from "../Paginate";
import { baseUrl } from "../../services/utils";
import { getAllGirls } from "../../services/apicalls_content";

const GirlsPage = () => {
  const [girls, setgirls] = useState([]);
  const pageToRedirectTo = `/model`;
  // let totalGirlsInDB = 1;
  const [pageCount, setpageCount] = useState(1);

  const setData = (elementsPerPage, offset) => {
    getAllGirls({ limit: elementsPerPage, offset })
      .then((r) => {
        const fetchedGirls = r.pageElements.map((girl) => {
          return { id: girl.id, name: girl.name, picture: girl.picture };
        });
        pageCount !== 1 ||
          setpageCount(Math.ceil(r.totalCount / elementsPerPage));
        setgirls(fetchedGirls);
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
        // totalElements={totalGirlsInDB}
        pageCount={pageCount}
        setpageCount={setpageCount}
      />
    </>
  );
};

export default GirlsPage;
