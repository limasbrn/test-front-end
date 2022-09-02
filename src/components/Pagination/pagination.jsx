import React from "react";
import "./pagination.css"
import ReactPaginate from "react-paginate";
import { styled } from "@stitches/react";

const Base = styled("div", {
  display: "flex",
  flexDirection:"row",
  color: "White",
  cursor: "pointer",
});

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <Base>
      <ReactPaginate className="pagination" activeClassName="active-btn" activeLinkClassName="active-btn" pageCount={Math.ceil(info?.pages)} forcePage={pageNumber === 1 ? 0 : pageNumber - 1} onPageChange={(data) => {
        setPageNumber(data.selected + 1);
        console.log(data.selected + 1);
      }}/>
    </Base>
  );
};

export default Pagination;
