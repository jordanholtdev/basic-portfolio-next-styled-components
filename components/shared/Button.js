import styled, { css } from "styled-components";

const Button = styled.button`
  font-size: 1em;
  margin: 1em 0 0 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  // primary button styles
  ${(props) =>
    props.primary &&
    css`
      font-size: 1em;
      margin: 1em 1em 0 0;
      padding: 0.25em 1em;
      border-radius: 3px;
      color: ${(props) => props.theme.bg.darkShades};
      border: 2px solid ${(props) => props.theme.bg.darkShades};
      :hover {
        transition: all 300ms;
        color: ${(props) => props.theme.text.onDarkShades};
        border: 2px solid ${(props) => props.theme.text.onDarkShades};
        background: ${(props) => props.theme.bg.darkShades};
      }
    `}
  ${(props) =>
    props.secondary &&
    css`
      font-size: 1em;
      margin: 1em 1em 0 0;
      padding: 0.25em 1em;
      border-radius: 3px;
      color: ${(props) => props.theme.text.onDarkShades};
      background: ${(props) => props.theme.bg.darkShades};
      border: 2px solid ${(props) => props.theme.text.onDarkShades};
      :hover {
        transition: all 300ms;
        color: ${(props) => props.theme.bg.darkShades};
        background: ${(props) => props.theme.text.onDarkShades};
        border: 2px solid ${(props) => props.theme.bg.darkShades};
      }
    `}
`;

export default Button;
