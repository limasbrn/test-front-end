import React from "react";
import { styled } from "@stitches/react";

const LayoutModal = styled("div", {
  position: "fixed",
  display: "flex",
  top: "0",
  left: "0",
  width: "100vW",
  height: "100vh",
  backgroundColor: "rgb(0,0,0,0.5)",
  justifyContent: "center",
  alignItems: "center",
});

const BaseModal = styled("div", {
  display: "flex",

  flexDirection: "row",
  width: "fit-content",
  minHeight: "222px",
  height: "fit-content",

  backgroundColor: "#000000",
  color: "white",
  borderRadius: "5px",
  overflow: "hidden",

  outline: "1px solid #00B6CD",
});

const TextContainer = styled("div", {
  flexDirection: "column",
  padding: "15px",
  display: "flex",
  gap: "10px",
  margin: "auto",
});

const TextP = styled("p", {
  fontSize: "20px",
  fontWeight: "lighter",
  color: "grey",
});

const TextTitle2 = styled("h2", {
  color: "#ACDD00",
});

const ButtonContainer = styled("div", {
  display: "flex",
  padding: "15px",
  flexDirection: "column",
  alignItems: "center",
});

export const Button = styled("button", {
  width: "120px",
  height: "35px",
  borderRadius: "5px",
  backgroundColor: "#ACDD00",
  color: "Black",
  fontWeight: "bold",
  border: "none",
  transition: "ease-in-out .5s",

  "&:hover": {
    boxShadow: "0px 0px 15px 0 rgba(5,255,0, 0.5)",
    outline: "1px solid #00B6CD",
    borderRadius: "30px",
  },
});

export const Modal = (props) => {
  return (
    <LayoutModal>
      <BaseModal>
        <img src={props.image} alt={props.name} />
        <TextContainer>
          <TextTitle2>{props.name}</TextTitle2>
          <div>
            <span>Species: </span>
            <TextP> {props.species}</TextP>
          </div>
          <div>
            <span>Origin:</span>
            <TextP> {props.origin.name}</TextP>
          </div>
          <div>
            <span>Current location:</span>
            <TextP> {props.location.name}</TextP>
          </div>
          <ButtonContainer>
            <Button onClick={props.onClose}>Close</Button>
          </ButtonContainer>
        </TextContainer>
      </BaseModal>
    </LayoutModal>
  );
};

export default Modal;
