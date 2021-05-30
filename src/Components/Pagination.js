const Pagination = ({ data }) => {
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
