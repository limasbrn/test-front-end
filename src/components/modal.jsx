import React from "react";
import { styled } from "@stitches/react";

const LayoutModal = styled("div", {
  display: "flex",
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vW",
  height: "100vh",
  backgroundColor: "rgb(0,0,0,0.75)",
  justifyContent: "center",
  alignItems: "center",
});
const BaseModal = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "fit-content",
  minHeight: "222px",
  height: "fit-content",
  overflow: "hidden",
  borderRadius: "5px",
  backgroundColor: "#000000",
  color: "white",
  outline: "1px solid #00B6CD",
});
const TextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  padding: "15px",
  gap: "10px",
});
const TextP = styled("p", {
  fontSize: "16px",
  fontWeight: "lighter",
  color: "grey",
});
const TextTitle2 = styled("h3", {
  color: "#ACDD00",
});
const DivStatus = styled("div", {
  display:"flex",
})
const ButtonContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "15px",
});
export const Button = styled("button", {
  width: "100px",
  height: "30px",
  borderRadius: "5px",
  backgroundColor: "#ACDD00",
  border: "none",
  color: "Black",
  fontWeight: "bold",
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
          <div>
            <TextTitle2>{props.name}</TextTitle2>
            <DivStatus>
              <TextP color={props.gender.toLowerCase()}>
                {props.gender}
              </TextP>
            </DivStatus>
          </div>
          <div>
            <span>Species: </span>
            <TextP>{props.species}</TextP>
          </div>
          <div>
            <span>Origin:</span>
            <TextP>{props.origin.name}</TextP>
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
