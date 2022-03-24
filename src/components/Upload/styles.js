import styled from "styled-components";
import { tokens } from "../../tokens";

export const UploadDocumentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  width: 75%;
  align-self: center;
  background-color: ${tokens.colorNeutral.Lightest};

  border-style: dashed;
  border-width: 0.5px;
  border-color: ${tokens.supportHighLight2.Base};
  border-radius: ${`${tokens.borderRadius.Sm}px`};

  background-color: ${(props) =>
    props.attached === false && props.dragging === false ? null : "#fff"};

  :hover {
    background-color: ${(props) =>
      !props.attached && tokens.supportHighLight2.Light};
  }
`;

export const InputFile = styled.input`
  display: none;
`;

export const UploadFileImg = styled.img``;

export const Title = styled.span`
  font-size: ${`${tokens.fontSize.Xxs}px`};
  color: ${tokens.colorNeutral.Darkest};
  line-height: ${tokens.lineHeight.Distant};
  margin-top: 10px;
  font-family: "sans-serif";
`;

export const SubTitle = styled.span`
  color: ${tokens.colorNeutral.Dark};
  font-size: ${`${tokens.fontSize.Details}px`};
  line-height: ${tokens.lineHeight.Tight};
  margin: 10px;
`;

/* display: 'flex',
          alignSelf: 'center',
          backgroundColor: tokens.colorNeutral.Lightest,
          width: 560,
          height: 216,
          borderStyle: 'dashed',
          borderWidth: 0.5,
          borderColor: tokens.colorBrand.Base,
          boxSizing: 'border-box',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: tokens.borderRadius.Sm, */
