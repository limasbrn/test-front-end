import { styled } from "@stitches/react";
/* import Logo from "../images/Rick-And-Morty-Logo.png";
 */
const HeaderBase = styled("header", {
  display: "flex",
  position: "sticky",
  top: "0",
  left: "0",
  height: "fit-content",
  width: "100%",
  zIndex: "10",
  

  backgroundColor: "#000000",
  color: "#1D92A0",
  boxShadow: "0px 0px 15px 0 rgba(5,255,0, 0.5)",
  outline: "1px solid #00B6CD",

  alignItems: "center",
  justifyContent: "space-between",
});

const ButtonNav = styled("button", {
  width: "fit-content",
  height: "fit-content",
  padding: "5px 10px",
  backgroundColor: "Black",
  color: "white",
  borderRadius: "30px",
  border: "1px solid #00B6CD",

  "&:hover": {
    backgroundColor: "#00B6CD",
    color: "black",
    fontWeight: "bolder",
  },
});

/* const ImgBase = styled("img", { 
    width: '150px',
    height: "auto",
}); */

export const Header = () => (
  <HeaderBase>
    <h1>| Logo | </h1>
    <div>
      <ButtonNav>About this</ButtonNav>
    </div>
    {/* <ImgBase src={Logo} /> */}
  </HeaderBase>
);
