import React from "react";
import { styled } from "@stitches/react";
import {
  LayoutModal,
  BaseModal,
  LinkPage,
  TextTitle2,
  Button,
} from "./about.styles";

export const About = (props) => {
  return (
    <LayoutModal>
      <BaseModal>
        <TextTitle2>About this project</TextTitle2>
        <h4>Created by Sabrina Silva</h4>
        <p>
          This project was developed with React Js and styled with Stiches. The
          application uses the data base available in{" "}
          <LinkPage href="https://rickandmortyapi.com/">this address</LinkPage>{" "}
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
        <h5>
          Check the code in{" "}
          <LinkPage href="https://github.com/limasbrn/test-front-end">
            this repository
          </LinkPage>{" "}
          .
        </h5>
        <Button onClick={props.onClose}>Close</Button>
      </BaseModal>
    </LayoutModal>
  );
};

export default About;
