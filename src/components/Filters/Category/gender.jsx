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

const Gender = ({setGender}) => {
  let gender = ["Female", "Male", "Genderless", "Unknwon"];
  return (
    <FilterContainer>
      {gender.map((item, index) => (
        <RadioFilter setValue={setGender} key={index} name="gender" index={index}  value={item} />
      ))}
    </FilterContainer>
  );
};

export default Gender;
