import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Pagination from "../Components/Pagination";

const Paginate = ({ perPage, data, setdata }) => {
  const [pageCount, setpageCount] = useState(0);
  // const [data, setdata] = useState([]);
  const [offset, setoffset] = useState(0);

  useEffect(() => {
    let r = serverResp({ limit: perPage, offset });
    setdata(r);
    setpageCount(Math.ceil(r.totalCount / perPage));
  }, [0]);

  useEffect(() => {
    loadCommentsFromServer();
  }, [offset]);

  const loadCommentsFromServer = async () => {
    try {
      let r = serverResp({ limit: perPage, offset });
      // const r = await axios.get("https:someurl", { limit: perPage, offset });
      setdata(r);
      setpageCount(Math.ceil(r.totalCount / perPage));
    } catch (e) {
      console.error(e);
    }
  };

  const serverResp = ({ limit, offset }) => {
    let r = {
      pageElements: [
        { picture: "1 One" },
        { picture: "2 Two" },
        { picture: "3 Three" },
        { picture: "4 Four" },
        { picture: "5 Five" },
        { picture: "6 Six" },
        { picture: "7 Seven" },
        { picture: "8 Eight" },
        { picture: "9 Nine" },
        { picture: "10 Ten" },
        { picture: "11 El" },
        { picture: "12 Tw" }
      ]
    };
    const ret = { pageElements: r.pageElements.slice(offset, offset + limit) };
    ret.totalCount = r.pageElements.length;
    return ret;
  };

  const handlePageClick = (d) => {
    let pageSelected = d.selected;
    let offset = Math.ceil(pageSelected * perPage);

    setoffset(offset);
  };
  console.log("d1", data);

  return (
    <>
      {/* <Pagination data={data.pageElements} /> */}
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </>
  );
};

export default Paginate;
