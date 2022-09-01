import React from "react";
import { styled } from "@stitches/react";
import Status from "./Category/status";
import Gender from "./Category/gender";
import Species from "./Category/species";

const LayoutFilters = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});
const InputRadio = styled("input", {
  color: "Gray",
});
const FilterContainer = styled("div", {
  width: "fit-content",
  height: "fit-content",
  padding: "5px",
  border: "1px solid #00B6CD",
  borderRadius: "7px",
});
const BigFilterCont = styled("div", {
  display: "flex",
  gap: "15px",
});
const Span = styled("span", {
  cursor: "pointer",
  color: "#ACDD00",
});

export const Filter = ({ setStatus, setSpecies, setGender }) => {
  return (
    <LayoutFilters>
      <h3>Filter the characters by features</h3>
      <BigFilterCont>
        <Status setStatus={setStatus} />
        <Gender setGender={setGender} />
        <Species setSpecies={setSpecies} />
      </BigFilterCont>
      <Span>Clear filters</Span>
    </LayoutFilters>
  );
};

export default Filter;
