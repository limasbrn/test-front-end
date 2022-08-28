import { styled } from "@stitches/react";

export const LayoutBase = styled("div", {
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
    
    backgroundColor: "#0F0F0F",
    boxShadow: "0 0 5px 0 rgba(0,0,0, 0.10)",
  });

export const Button = styled("button", {
    width: "120px",
    height: "35px",
    borderRadius: "5px",
    backgroundColor: "#ACDD00",
    color: "Black",
    fontWeight: "bold",
    border: "none",
    transition: "ease-in-out .5s",
  
    "&:hover": {
      boxShadow: "0px 0px 15px 0 rgba(5,255,0, 0.5)",
      outline: "1px solid #00B6CD",
      borderRadius: "30px",
    },
  });