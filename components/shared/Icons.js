import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";

const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: ${(props) => props.theme.bg.lightAccents};
    height: 42px;
    padding-right: 2rem;
    :hover {
      color: ${(props) => props.theme.bg.lightShades};
    }
  }
`;
export default IconStyleWrapper;
