import styled from "styled-components";
import { tokens } from "../../tokens";

export const AttachedFileArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #e6f4ff;
  font-size: ${tokens.fontSize.Xxxxs}px;
  color: ${tokens.colorBrand.Base};
  line-height: ${tokens.lineHeight.Superdistant};
  padding: 5px;
  border-radius: ${tokens.borderRadius.Lg}px;
`;

export const AttachedFileClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 5px;
`;

export const AttachIconArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(90deg);
  padding-left: 5px;
  padding-right: 5px;
`;
