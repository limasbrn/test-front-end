import React from "react";
import { styled } from "@stitches/react";

const LayoutModal = styled("div", {
  display: "flex",
  position: "fixed",
  top: "0",
  left: "0",
  justifyContent: "center",
  alignItems: "center",
  width: "100vW",
  height: "100vh",
  backgroundColor: "rgb(0,0,0,0.75)",
});
const BaseModal = styled("div", {
  display: "flex",
  padding: "30px",
  maxWidth: "370px",
  width: "fit-content",
  height: "fit-content",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "justify",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: "5px",
  backgroundColor: "#000000",
  color: "Gray",
  outline: "1px solid #00B6CD",
});
const InfoContainer = styled("div", {
  display: "flex",
  width :"100%",
  flexDirection:"column",
});
const TextTitle2 = styled("h2", {
  color: "#ACDD00",
});
export const Button = styled("button", {
  width: "100px",
  height: "30px",
  borderRadius: "5px",
  border: "none",
  marginTop: "15px",
  backgroundColor: "#ACDD00",
  color: "Black",
  fontWeight: "bold",
  transition: "ease-in-out .5s",

  "&:hover": {
    boxShadow: "0px 0px 15px 0 rgba(5,255,0, 0.5)",
    outline: "1px solid #00B6CD",
    borderRadius: "30px",
  },
});

export const AboutSeries = (props) => {
  return (
    <LayoutModal>
      <BaseModal>
        <TextTitle2>Ricky $ Morty</TextTitle2>
        <h4>Created by Dan Harmon, Justin Roiland</h4>
        <p>
          Join the misadventures of the scientist Rick and his overly nervous
          grandson Morty, in their domestic family life and intergalactic
          travels.
        </p>
        <InfoContainer>
          <h4>Seasons:</h4>
          <span>The sixth season will be available from the 4th of September.</span>
          <h4>Number of Characters:</h4>
          <span>826 characters</span>
          <h4>Locations:</h4>
          <span>126 locations</span>
          <h5>Disclaimer: The number may change in occurency of the new season.</h5>
        </InfoContainer>

        <Button onClick={props.onClose}>Close</Button>
      </BaseModal>
    </LayoutModal>
  );
};

export default AboutSeries;
