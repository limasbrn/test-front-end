import { styled } from "@stitches/react";
import Logo from "../images/Rick-And-Morty-Logo.png";

const HeaderBase = styled("header", {
  display: "flex",
  position: "sticky",
  top: "0",
  left: "0",
  height: "fit-content",
  width: "100%",

  backgroundColor: "#000000",
  color: "#1D92A0",
  boxShadow: "0px 0px 15px 0 rgba(5,255,0, 0.5)",
  outline: "1px solid #00B6CD",

  alignItems: "center",
  justifyContent: "center",

});

const ImgBase = styled("img", { 
    width: '200px',
    height: "auto",
});

export const Header = () => (
  <HeaderBase>
    <ImgBase src={Logo} />
  </HeaderBase>
);
