import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin: 4rem 4rem;
  width: 100%;
  max-width: 1250px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  font-size: ${(props) => props.theme.fontSizes.large};

  @media ${(props) => props.theme.breakpoints.smallViewport} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default Wrapper;
