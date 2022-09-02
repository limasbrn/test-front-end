import React from "react";
import {
  LayoutModal,
  BaseModal,
  InfoContainer,
  TextTitle2,
  Button,
} from "./about.styles";

export const AboutSeries = (props) => {
  return (
    <LayoutModal>
      <BaseModal>
        <TextTitle2>Ricky $ Morty</TextTitle2>
        <h4>Created by Dan Harmon, Justin Roiland</h4>
        <p>
        Rick Sanchez, a depressed, alcoholic, madman (who also happens to be a genius scientist with the ability to travel through dimensions) returns to his daughter Beth's life after two decades of being silent between the two. He finds her married to a man named Jerry, and the couple has two teenage kids. Summer, the oldest girl, and Morty, the youngest child and a boy, is an anxious, quiet, and sweet kid. Rick makes Morty his sidekick and takes him on hilarious Interdimensional adventures, causing poor Morty to become steadily more miserable due to Rick's insane and careless additude.
        </p>
        <InfoContainer>
          <h4>Seasons:</h4>
          <span>The sixth season will be available from the 4th of September.</span>
          <h4>Number of Characters:</h4>
          <span>826 characters</span>
          <h4>Locations:</h4>
          <span>126 locations</span>
          <h5>Disclaimer: The number may change in occurency of the new season.</h5>
        </InfoContainer>

        <Button onClick={props.onClose}>Close</Button>
      </BaseModal>
    </LayoutModal>
  );
};

export default AboutSeries;
