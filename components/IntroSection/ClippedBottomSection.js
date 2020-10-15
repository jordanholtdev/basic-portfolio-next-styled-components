import styled from "styled-components";

const ClippedBottomSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.bg.darkShades};
  ::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 101%;
    height: 4rem;
    display: block;
    background: url("/clippedBottom.png") center center no-repeat;
    background-size: auto;
    background-size: 100% 4rem;
  }
`;

export default ClippedBottomSection;
