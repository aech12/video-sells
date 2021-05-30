import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "./Paginate.css";
// import Pagination from "../Components/Pagination";

const Paginate = ({ setData, totalElements }) => {
  const [pageCount, setpageCount] = useState(0);
  const [offset, setoffset] = useState(0);
  const elementsPerPage = 3;

  // resp = {totalCount (of elems), arrayOfElems}
  useEffect(() => {
    setData(elementsPerPage, offset);
    setpageCount(Math.ceil(totalElements / elementsPerPage));
  }, [0]);

  useEffect(() => {
    setData(elementsPerPage, offset);
  }, [offset]);

  const handlePageClick = (d) => {
    let pageSelected = d.selected;
    let offset = Math.ceil(pageSelected * elementsPerPage);

    console.log("offset", offset);

    setoffset(offset);
  };

  return (
    <>
      {/* <Pagination data={data.pageElements} /> */}
      <div id="react-paginate">
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
      </div>
    </>
  );
};

export default Paginate;
