import { styled } from "@stitches/react";
import RickMorty from "../images/banner.jpg";

const BannerBase = styled("div", {
  position: "relative",
  display: "flex",
  width: "100%",
  height: "fit-content",
});
const Image = styled("img", {
  width: "100%",
  height: "auto",
});
const InfoLayout = styled("div", {
  display: "none",
  width: "300px",
  flexDirection: "column",
  position: "absolute",
  left: "30px",
  bottom: "35px",
  padding: "15px",
  borderRadius: "5px",
  border: "1px solid #ACDD00",
  color: "#ACDD00",
  backgroundColor: "rgb(172, 221, 0, 0.1)",

  "@media (min-width: 1145px)": {
    display: "flex",
  },
});
const InfoLayoutMobile = styled("div", {
  display: "none",
  flexDirection: "column",
  position: "absolute",
  left: "10px",
  bottom: "15px",
  width: "170px",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ACDD00",
  color: "#ACDD00",
  backgroundColor: "rgb(172, 221, 0, 0.1)",

  "@media (min-width: 725px)": {
    display: "flex",
  },
  "@media (min-width: 790px)": {
    left: "30px",
    bottom: "30px",
  },
  "@media (min-width: 850px)": {
    width: "220px",
  },
  "@media (min-width: 950px)": {
    width: "250px",
  },
  "@media (min-width: 1050px)": {
    width: "280px",
  },
  "@media (min-width: 1150px)": {
    display: "none",
  },
});
const SeasonLayout = styled("div", {
  display: "none",
  flexDirection: "column",
  position: "absolute",
  right: "10px",
  bottom: "15px",
  width: "fit-content",
  padding: "15px",
  borderRadius: "5px",
  border: "1px solid #ACDD00",
  color: "#ACDD00",
  backgroundColor: "rgb(172, 221, 0, 0.1)",

  "@media (min-width: 680px)": {
    display: "flex",
  },
  "@media (min-width: 790px)": {
    right: "30px",
    bottom: "30px",
  },
});
const Span = styled("span", {
  textAlign: "justify",
  fontSize: "17px",
  fontWeight: "lighter",
});

export const Banner = () => (
  <BannerBase>
    <Image src={RickMorty} />
    <InfoLayoutMobile>
      <h3>Are you ready to board this intergalactic travel?</h3>
      <Span>
        Join the misadventures of the scientist Rick and his overly nervous
        grandson Morty, in their domestic family life and intergalactic travels.
      </Span>
    </InfoLayoutMobile>
    <InfoLayout>
      <h2>Are you ready to board this intergalactic travel?</h2>
      <Span>
        Join the misadventures of the scientist Rick and his overly nervous
        grandson Morty, in their domestic family life and intergalactic travels.
      </Span>
      <h4>Creators:</h4>
      <Span> Dan Harmon, Justin Roiland</Span>
      <h4>Genre:</h4>
      <Span> Animation, Aventure, Comedy</Span>
      <h4>Debut year:</h4>
      <Span> 2013</Span>
    </InfoLayout>
    <SeasonLayout>
      <h3>SEASON 6 PREMIERE</h3>
      <Span>September 4, 2022</Span>
    </SeasonLayout>
  </BannerBase>
);
