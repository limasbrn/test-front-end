import { useState } from "react";
import { styled } from "@stitches/react";
import Logo from "../images/logo1.svg";
import About from "./about";
import Series from "./aboutSeries";

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
  width: "100px",
  height: "30px",
  borderRadius: "5px",
  border: "1px solid #00B6CD",
  backgroundColor: "Black",
  color: "#ACDD00",
  fontWeight: "bold",
  transition: "ease-in-out .5s",

  "&:hover": {
    boxShadow: "0px 0px 15px 0 rgba(5,255,0, 0.5)",
    outline: "1px solid #00B6CD",
    borderRadius: "30px",
  },
});
const ImgBase = styled("img", {
  width: "60px",
  height: "auto",
});
const DivContainer = styled("div", {
  display: "flex",
  padding: "15px 30px",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
});

export const Header = () => {
  const [modal, setModal] = useState(false);
  const [series, setSeries] = useState(false);

  return (
    <HeaderBase>
      <DivContainer>
        <ImgBase src={Logo} />
        <span>
          <strong>Rick & Morty</strong> | The search app
        </span>
      </DivContainer>
      <DivContainer>
        <ButtonNav onClick={() => setSeries(!series)}>About the series</ButtonNav>
        {series && <Series onClose={() => setSeries("")} />}
        
        <ButtonNav onClick={() => setModal(!modal)}>About this project</ButtonNav>
        {modal && <About onClose={() => setModal("")} />}
      </DivContainer>
    </HeaderBase>
  );
};
