import Container from "../shared/Container";
import Wrapper from "../shared/Wrapper";
import ArticleWrapper from "./ArticleWrapper";
import IconStyleWrapper from "../shared/Icons";
import {
  GithubWithCircle,
  LinkedinWithCircle,
  TwitterWithCircle,
  MailWithCircle,
} from "@styled-icons/entypo-social/";

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <ArticleWrapper>
          <article>
            <h3>Contact</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse et nisi non magna ornare sagittis id ut dui.
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
          </article>
        </ArticleWrapper>
      </Wrapper>
    </Container>
  );
};

export default Contact;
