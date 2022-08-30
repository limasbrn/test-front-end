import { styled } from "@stitches/react";

const FooterBase = styled("header", {
  display: "flex",
  height: "fit-content",
  width: "100%",
  padding:"15px",
  backgroundColor: "#000000",
  color: "#1D92A0",
  outline: "1px solid #00B6CD",
  alignItems: "center",
  justifyContent: "center",

});

export const Footer = () => (
  <FooterBase>
    <span>Created by <strong>Sabrina Silva</strong></span>
  </FooterBase>
);