import styled, { css } from "styled-components";

const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  overflow: hidden;
  color: ${(props) => props.theme.bg.darkShades};
  background-color: ${(props) => props.theme.bg.lightShades};
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}
  ${(props) =>
    props.dark &&
    css`
      background-color: ${(props) => props.theme.bg.darkShades};
      color: ${(props) => props.theme.text.onDarkShades};
    `}
`;

export default Container;
