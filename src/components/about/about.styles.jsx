import { styled } from "@stitches/react";

export const LayoutModal = styled("div", {
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
export const BaseModal = styled("div", {
  display: "flex",
  padding: "30px",
  maxWidth: "400px",
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
export const LinkPage = styled("a", {
  textDecoration: "none",
  color: "#00B6CD",
});
export const TextTitle2 = styled("h2", {
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
export const InfoContainer = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
});
