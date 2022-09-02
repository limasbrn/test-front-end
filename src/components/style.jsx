import { styled } from "@stitches/react";

/* Banner style's */
export const BannerBase = styled("div", {
  position: "relative",
  display: "flex",
  width: "100%",
  height: "fit-content",
});
export const Image = styled("img", {
  width: "100%",
  height: "auto",
});
export const InfoLayout = styled("div", {
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
export const InfoLayoutMobile = styled("div", {
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
export const SeasonLayout = styled("div", {
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
export const Span = styled("span", {
  textAlign: "justify",
  fontSize: "17px",
  fontWeight: "lighter",
});
/* Footer style's */
export const FooterBase = styled("header", {
  display: "flex",
  height: "fit-content",
  width: "100%",
  padding: "0px 30px",
  backgroundColor: "#000000",
  color: "#1D92A0",
  outline: "1px solid #00B6CD",
  alignItems: "center",
  justifyContent: "flex-end",
});
export const ImgBase = styled("img", {
  width: "120px",
  height: "auto",
  marginRight: "70px",
});
/* Header style's */
export const HeaderBase = styled("header", {
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
export const ButtonNav = styled("button", {
  width: "120px",
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
export const ImgBaseHeader = styled("img", {
  display: "none",
  width: "60px",
  height: "auto",

  "@media (min-width: 630px)": {
    display: "flex",
  },
});
export const ImgBaseMobile = styled("img", {
  display: "flex",
  width: "120px",
  height: "auto",
  "@media (min-width: 630px)": {
    display: "none",
  },
});
export const DivContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "15px 30px",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",

  "@media (min-width: 630px)": {
    flexDirection: "row",
  },
});
export const SpanTitle = styled("span", {
  display: "none",
  "@media (min-width: 630px)": {
    display: "flex",
  },
});
/* Modal style's */
export const LayoutModal = styled("div", {
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
export const BaseModal = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  minHeight: "222px",
  height: "fit-content",
  overflow: "hidden",
  borderRadius: "5px",
  backgroundColor: "#000000",
  color: "white",
  outline: "1px solid #00B6CD",

  "@media (min-width: 500px)": {
    flexDirection: "row",
  },
});
export const TextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  padding: "15px",
  gap: "10px",
});
export const TextP = styled("p", {
  fontSize: "16px",
  fontWeight: "lighter",
  color: "grey",
});
export const TextTitle2 = styled("h3", {
  color: "#ACDD00",
});
export const DivStatus = styled("div", {
  display: "flex",
});
export const ButtonContainer = styled("div", {
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
