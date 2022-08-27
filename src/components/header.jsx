import { styled } from "@stitches/react";

const HeaderBase = styled("header", {
    display: "flex",
    position: "sticky",
    top: "0",
    left: "0",
    height: "55px",
    width: "100%",
  
    backgroundColor: "#FFFFFF",
    boxShadow: "0 0 5px 0 rgba(0,0,0, 0.10)",
  
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "45px",
  });


export const Header = () => (
    <HeaderBase>
      <h3>Rick & Morty | The search App</h3>
    </HeaderBase>
  );