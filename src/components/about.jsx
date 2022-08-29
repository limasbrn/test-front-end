import React from "react";
import { styled } from "@stitches/react";

const LayoutModal = styled("div", {
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
const BaseModal = styled("div", {
  display: "flex",
  padding: "30px",
  maxWidth: "370px",
  width: "fit-content",
  height: "fit-content",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "justify",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: "5px",
  backgroundColor: "#000000",
  color: "Gray",
  outline: "1px solid #00B6CD",
});
const LinkPage = styled("a", {
  textDecoration: "none",
  color: "#00B6CD",
});
const TextTitle2 = styled("h2", {
  color: "#ACDD00",
});
export const Button = styled("button", {
  width: "120px",
  height: "35px",
  borderRadius: "5px",
  backgroundColor: "#ACDD00",
  border: "none",
  marginTop: "15px",
  color: "Black",
  fontWeight: "bold",
  transition: "ease-in-out .5s",

  "&:hover": {
    boxShadow: "0px 0px 15px 0 rgba(5,255,0, 0.5)",
    outline: "1px solid #00B6CD",
    borderRadius: "30px",
  },
});

export const About = (props) => {
  return (
    <LayoutModal>
      <BaseModal>
        <TextTitle2>About this</TextTitle2>
        <p>
          This project was developed with React Js and styled with Stiches. The
          application uses the data base available in {" "}
          <LinkPage href="https://rickandmortyapi.com/">
            this address
          </LinkPage>{" "}
          and utilizes the data as a resource to accomplish the following tasks:
        </p>
        <ul>
          <li>
            - Fetch at least once the data available in this{" "}
            <LinkPage href="https://rickandmortyapi.com/">link</LinkPage>;
          </li>
          <li>- Search area;</li>
          <li>- Display the characters;</li>
          <li>
            - On click display a more detailed modal about the characters;
          </li>
        </ul>
        <Button onClick={props.onClose}>Close</Button>
      </BaseModal>
    </LayoutModal>
  );
};

export default About;
