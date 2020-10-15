import Container from "../shared/Container";
import Wrapper from "../shared/Wrapper";
import Banner from "../shared/Banner";
import ImageWrapper from "./ImageWrapper";
import StyledArticle from "./StyledArticle";
import IconStyleWrapper from "../shared/Icons";
import {
  GithubWithCircle,
  LinkedinWithCircle,
  TwitterWithCircle,
  MailWithCircle,
} from "@styled-icons/entypo-social/";

const About = () => {
  return (
    <Container column>
      <h3>A little bit about me</h3>
      <Wrapper>
        <Banner>
          <ImageWrapper>
            <img src="https://via.placeholder.com/200" />
          </ImageWrapper>
          <StyledArticle>
            <h3>Hey 👋</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse et nisi non magna ornare sagittis id ut dui. Aenean
              dapibus sagittis arcu vitae mollis. Phasellus finibus sem sit amet
              tempus efficitur. Proin ut odio mattis nisl semper dapibus nec et
              nunc. Maecenas dictum malesuada blandit. Etiam urna odio, suscipit
              vitae felis eu, tempor elementum odio. Nulla nec turpis metus.
            </p>
            <IconStyleWrapper>
              <a href="https://github.com/jordanholtdev">
                <GithubWithCircle />
              </a>
              <a href="https://twitter.com/jordanholtdev">
                <TwitterWithCircle />
              </a>
              <a href="mailto:jordan@jordanholt.dev">
                <MailWithCircle />
              </a>
              <a href="https://github.com/jordanholtdev">
                <LinkedinWithCircle />
              </a>
            </IconStyleWrapper>
          </StyledArticle>
        </Banner>
      </Wrapper>
    </Container>
  );
};

export default About;
