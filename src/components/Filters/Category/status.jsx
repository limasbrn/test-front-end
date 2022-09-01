import React from "react";
import { styled } from "@stitches/react";
import RadioFilter from "../radioFilter";

const FilterContainer = styled("div", {
  width: "fit-content",
  height: "fit-content",
  padding: "5px",
  border: "1px solid #00B6CD",
  borderRadius: "7px",
});

const Status = ({ setStatus }) => {
  let status = ["Alive", "Dead", "unknown"];

  return (
    <FilterContainer>
      {status.map((item, index) => (
        <RadioFilter
          setValue={setStatus}
          key={index}
          name="status"
          index={index}
          value={item}
        />
      ))}
    </FilterContainer>
  );
};

export default Status;
