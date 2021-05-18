import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
// import Pagination from "../Components/Pagination";

const Paginate = ({ perPage, setData, totalGirls }) => {
  const [pageCount, setpageCount] = useState(0);
  const [offset, setoffset] = useState(0);

  // resp = {totalCount (of elems), arrayOfElems}
  useEffect(() => {
    setData(offset);
    setpageCount(Math.ceil(totalGirls / perPage));
  }, [0]);

  useEffect(() => {
    setData(offset);
  }, [offset]);

  const handlePageClick = (d) => {
    let pageSelected = d.selected;
    let offset = Math.ceil(pageSelected * perPage);

    setoffset(offset);
  };

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
