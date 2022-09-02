import React from "react";
import { styled } from "@stitches/react";
import Status from "./Category/status";
import Gender from "./Category/gender";

const LayoutFilters = styled("div", {
  display: "flex",
  flexDirection: "column",
  fontSize:"22px",
  gap: "10px",

  "@media (min-width: 770px)": {
    fontSize:"16px",
  },
});
const BigFilterCont = styled("div", {
  display: "flex",
  gap: "15px",
});
const Span = styled("span", {
  cursor: "pointer",
  color: "#ACDD00",
});

export const Filter = ({ setStatus, setGender }) => {
  let clear = () => {
    setStatus("");
    setGender("");
    window.location.reload(false);
  };
  return (
    <LayoutFilters>
      <h3>Filter the characters by features</h3>
      <BigFilterCont>
        <Status setStatus={setStatus} />
        <Gender setGender={setGender} />
      </BigFilterCont>
      <Span onClick={clear}>Clear filters</Span>
    </LayoutFilters>
  );
};

export default Filter;
