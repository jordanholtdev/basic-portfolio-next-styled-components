import styled from "styled-components";

import Container from "../shared/Container";
import Wrapper from "../shared/Wrapper";
import Showcase from "./Showcase";
import Button from "../shared/Button";

const StyledArticle = styled.article`
  width: 100%;
  margin: 5rem 0 0 0;
  order: 2;
  text-align: left;
  @media ${(props) => props.theme.breakpoints.smallViewport} {
    width: 40%;
    margin: auto 4rem auto 0;
    order: 1;
  }
`;

const ProjectSection = () => {
  return (
    <>
      <Container column>
        <h3>Work</h3>
        <h5>Here are some of my projects</h5>
      </Container>
      <Container>
        <Wrapper>
          <StyledArticle>
            <h3>Project #1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse et nisi non magna ornare sagittis id ut dui. Aenean
              dapibus sagittis arcu vitae mollis.
            </p>
            <Button primary>GitHub</Button>
            <Button primary>Live</Button>
          </StyledArticle>
          <Showcase>
            <a href="https://placeholder.com/ "></a>
            <img src="https://via.placeholder.com/500x600/000/fff.png"></img>
          </Showcase>
        </Wrapper>
      </Container>
      <Container dark>
        <Wrapper>
          <Showcase>
            <a href="https://placeholder.com/ "></a>
            <img src="https://via.placeholder.com/500x600/000/fff.png"></img>
          </Showcase>
          <StyledArticle>
            <h3>Project #2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse et nisi non magna ornare sagittis id ut dui. Aenean
              dapibus sagittis arcu vitae mollis.
            </p>
            <Button secondary>GitHub</Button>
            <Button secondary>Live</Button>
          </StyledArticle>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper>
          <StyledArticle>
            <h3>Project #3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse et nisi non magna ornare sagittis id ut dui. Aenean
              dapibus sagittis arcu vitae mollis.
            </p>
            <Button primary>GitHub</Button>
            <Button primary>Live</Button>
          </StyledArticle>
          <Showcase>
            <a href="https://placeholder.com/ "></a>
            <img src="https://via.placeholder.com/500x600/000/fff.png"></img>
          </Showcase>
        </Wrapper>
      </Container>
    </>
  );
};

export default ProjectSection;
