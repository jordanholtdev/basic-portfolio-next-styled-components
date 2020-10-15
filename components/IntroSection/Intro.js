import styled from "styled-components";

const Intro = styled.div`
  color: ${(props) => props.theme.bg.lightShades};
  width: 100%;
  @media ${(props) => props.theme.breakpoints.xSmallViewport} {
    width: 55%;
  }
`;

export default Intro;
