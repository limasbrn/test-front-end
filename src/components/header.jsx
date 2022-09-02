import { useState } from "react";
import Logo from "../images/logo1.svg";
import LogoMobile from "../images/Rick-And-Morty-Logo.png";
import About from "./about/about";
import Series from "./about/aboutSeries";
import {
  HeaderBase,
  ButtonNav,
  ImgBaseHeader,
  ImgBaseMobile,
  DivContainer,
  SpanTitle,
} from "./style";

export const Header = () => {
  const [modal, setModal] = useState(false);
  const [series, setSeries] = useState(false);

  return (
    <HeaderBase>
      <DivContainer>
        <ImgBaseHeader src={Logo} />
        <ImgBaseMobile src={LogoMobile} />
        <SpanTitle>
          <strong>Rick & Morty</strong> | The search app
        </SpanTitle>
      </DivContainer>
      <DivContainer>
        <ButtonNav onClick={() => setSeries(!series)}>
          About the series
        </ButtonNav>
        {series && <Series onClose={() => setSeries("")} />}

        <ButtonNav onClick={() => setModal(!modal)}>
          About this project
        </ButtonNav>
        {modal && <About onClose={() => setModal("")} />}
      </DivContainer>
    </HeaderBase>
  );
};
