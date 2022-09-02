import React from "react";
import {
  LayoutModal,
  BaseModal,
  TextContainer,
  TextP,
  TextTitle2,
  DivStatus,
  ButtonContainer,
  Button,
} from "./style";

export const ModalCard = (props) => {
  return (
    <LayoutModal>
      <BaseModal>
        <img src={props.image} alt={props.name} />
        <TextContainer>
          <div>
            <TextTitle2>{props.name}</TextTitle2>
            <DivStatus>
              <TextP color={props.gender.toLowerCase()}>{props.gender}</TextP>
            </DivStatus>
          </div>
          <div>
            <span>Species: </span>
            <TextP>{props.species}</TextP>
          </div>
          <div>
            <span>Origin:</span>
            <TextP>{props.origin.name}</TextP>
          </div>
          <div>
            <span>Current location:</span>
            <TextP> {props.location.name}</TextP>
          </div>
          <ButtonContainer>
            <Button onClick={props.onClose}>Close</Button>
          </ButtonContainer>
        </TextContainer>
      </BaseModal>
    </LayoutModal>
  );
};

export default ModalCard;
