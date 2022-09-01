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

const Species = ({ setSpecies}) => {
  let species = [
    "Human",
    "Alien",
    "Unknwon",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <FilterContainer>
      {species.map((item, index) => (
        <RadioFilter setValue={setSpecies} key={index} name="species" index={index} value={item} />
      ))}
    </FilterContainer>
  );
};

export default Species;
