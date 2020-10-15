import styled from "styled-components";

import NavWrapper from "./NavWrapper";
import List from "../shared/List";
import ListItem from "../shared/ListItem";

const StyledNav = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bg.darkShades};
  color: ${(props) => props.theme.bg.lightShades};
  z-index: 99;
`;

const Header = () => {
  return (
    <StyledNav>
      <NavWrapper>
        <span>John Doe</span>
        <List>
          <ListItem>Work</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>
            <a href="https://blog.jordanholt.dev/">Blog</a>
          </ListItem>
        </List>
      </NavWrapper>
    </StyledNav>
  );
};

export default Header;
