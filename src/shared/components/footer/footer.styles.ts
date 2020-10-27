import styled from "styled-components";
import { colors } from "../../../browser/styles/colors";

export const Wrapper = styled.div`
  margin: 2rem 0 0 0;
  padding: 2rem;
  background-color: ${colors.secondary};
  text-align: center;
`;

export const By = styled.i`
  color: ${colors.terciary};
`;

export const Name = styled.b`
  color: ${colors.primary};
`;

export const Reference = styled.p`
  color: #879cab;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #879cab;
`;
