import styled from "styled-components";

const Showcase = styled.div`
  width: 100%;
  order: 1;
  @media ${(props) => props.theme.breakpoints.smallViewport} {
    width: 50%;
  }
`;

export default Showcase;
