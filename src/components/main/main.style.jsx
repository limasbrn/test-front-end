import { styled } from "@stitches/react";

export const LayoutBase = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#0F0F0F",
});
export const Input = styled("input", {
  width: "200px",
  height: "35px",
  paddingLeft: "10px",
  marginRight: "10px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#0F0F0F",
  color: "white",
  fontSize: "18px",
  transition: "ease-in-out .5s",

  "&:focus": {
    outline: "1px solid #00B6CD",
    borderRadius: "30px",
  },
});
export const FormLayout = styled("div", {
  display: "flex",
  width: "100%",
  padding: "30px 0px 0px",
  gap: "15px",
  justifyContent: "center",
  fontSize: "22px",

  "@media (min-width: 470px)": {
    width: "84%",
  },
  "@media (min-width: 770px)": {
    fontSize: "16px",
  },
});
export const ContainerSelect = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "20px 30px",
  height: "fit-content",
  borderRadius: "7px",
  gap: "15px",
  color: "Gray",
  justifyContent: "center",
  backgroundColor: "Black",

  "@media (min-width: 770px)": {
    flexDirection: "row",
  },
});
export const ContentWrap = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const StatusText = styled("h4", {
  variants: {
    color: {
      dead: { color: "#DF2222" },
      alive: { color: "#ACDD00" },
      unknwon: { color: "Gray" },
    },
  },
});
export const ListaLayout = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gridAutoRows: "auto",
  gap: "30px",
  padding: "30px",
  justifyItems: "center",

  "@media (min-width: 815px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (min-width: 1200px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});
export const LiLayout = styled("li", {
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  height: "fit-content",
  borderRadius: "7px",
  padding: "30px",
  backgroundColor: "Black",
  color: "White",
  textDecoration: "none",

  "&:hover": {
    outline: "1px solid #00B6CD",
  },
});
export const DetailsLayout = styled("div", {
  display: "flex",
  flexDirection: "row",
  padding: "15px 5px 5px",
  justifyContent: "space-between",
  alignItems: "center",
});
export const SearchButton = styled("button", {
  width: "fit-content",
  height: "fit-content",
  padding: "7px 20px",
  borderRadius: "5px",
  border: "none",
  color: "Black",
  backgroundColor: "#ACDD00",
  fontWeight: "bold",
  transition: "ease-in-out .5s",

  "&:hover": {
    boxShadow: "0px 0px 15px 0 rgba(5,255,0, 0.5)",
    outline: "1px solid #00B6CD",
    borderRadius: "30px",
  },

  /* "@media (min-width: 600px)": {}, */
});
export const LiButton = styled("button", {
  width: "fit-content",
  height: "fit-content",
  padding: "5px 10px",
  borderRadius: "5px",
  border: "1px solid #00B6CD",
  backgroundColor: "Black",
  color: "#ACDD00",
  transition: "ease-in-out .5s",

  "&:hover": {
    outline: "1px solid #00B6CD",
    borderRadius: "30px",
  },
});
