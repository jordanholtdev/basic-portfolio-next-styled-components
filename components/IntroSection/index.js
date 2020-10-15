import ClippedBottomSection from "./ClippedBottomSection";

import Wrapper from "../shared/Wrapper";
import Intro from "../IntroSection/Intro";
import IconStyleWrapper from "../shared/Icons";
import {
  GithubWithCircle,
  LinkedinWithCircle,
  TwitterWithCircle,
  MailWithCircle,
} from "@styled-icons/entypo-social/";

const Hero = () => {
  return (
    <ClippedBottomSection>
      <Wrapper>
        <Intro>
          <span>Front-end Developer</span>
          <h1>Hey, I'm John.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            et nisi non magna ornare sagittis id ut dui. Aenean dapibus sagittis
            arcu vitae mollis. Phasellus finibus sem sit amet tempus efficitur.
            Proin ut odio mattis nisl semper dapibus nec et nunc.{" "}
          </p>
          <div>
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
          </div>
        </Intro>
      </Wrapper>
    </ClippedBottomSection>
  );
};

export default Hero;
