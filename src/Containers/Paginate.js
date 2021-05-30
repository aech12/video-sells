import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "./Paginate.css";
// import Pagination from "../Components/Pagination";

const Paginate = ({ setData, totalElements, pageCount, setpageCount }) => {
  // const [pageCount, setpageCount] = useState(1);
  const [offset, setoffset] = useState(0);
  const elementsPerPage = 8;

  // resp = {totalCount (of elems), arrayOfElems}
  useEffect(() => {
    setData(elementsPerPage, offset);
  }, [0]);

  const handlePageClick = (d) => {
    let pageSelected = d.selected;
    let offset = Math.ceil(pageSelected * elementsPerPage);

    setData(elementsPerPage, offset);
    setoffset(offset);
  };

  return (
    <>
      {/* <Pagination data={data.pageElements} /> */}
      <div id="react-paginate">
        <ReactPaginate
          // id="react-paginate"
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
      </div>
    </>
  );
};

export default Paginate;
