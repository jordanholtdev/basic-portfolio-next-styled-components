import Container from "../shared/Container";
import Wrapper from "../shared/Wrapper";

const Footer = () => {
  return (
    <Container dark column>
      <Wrapper>
        <div>
          <h4>John Doe</h4>
          <hr />
          <span>Copyright © 2020 John Doe</span>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Footer;
