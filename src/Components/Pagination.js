import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

const Pagination = ({ data }) => {
  console.log("pagination.js", data);
  // return <p>hi</p>
  // if (!data) return <p>Loading</p>

  let commentNodes = data.map(function (element, index) {
    return <div key={index}>{element.picture}</div>;
  });

  return (
    <div id="project-comments" className="commentList">
      <ul>{commentNodes}</ul>
    </div>
  );
};

export default Pagination;
