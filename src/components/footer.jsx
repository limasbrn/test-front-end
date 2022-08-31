import { styled } from "@stitches/react";
import LogoRM from "../images/Rick-And-Morty-Logo.png"

const FooterBase = styled("header", {
  display: "flex",
  height: "fit-content",
  width: "100%",
  padding:"0px 30px",
  backgroundColor: "#000000",
  color: "#1D92A0",
  outline: "1px solid #00B6CD",
  alignItems: "center",
  justifyContent: "flex-end",

});
const ImgBase = styled("img", {
  width: "120px",
  height: "auto",
  marginRight:"70px",
});

export const Footer = () => (
  <FooterBase>
    <ImgBase src={LogoRM}/>
  </FooterBase>
);