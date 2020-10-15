import Container from "../shared/Container";
import Wrapper from "../shared/Wrapper";
import ImageWrapper from "./ImageWrapper";
import StyledImage from "./StyledImage";
import Banner from "../shared/Banner";
import StyledArticle from "./StyledArticle";

const TechSection = () => {
  return (
    <Container dark>
      <Wrapper>
        <Banner>
          <StyledArticle>
            <h3>Tech Stack</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            et nisi non magna ornare sagittis id ut dui. Aenean dapibus sagittis
            arcu vitae mollis. Phasellus finibus sem sit amet tempus efficitur.
            Proin ut odio mattis nisl semper dapibus nec et nunc. Maecenas
            dictum malesuada blandit. Etiam urna odio, suscipit vitae felis eu,
            tempor elementum odio. Nulla nec turpis metus.
          </StyledArticle>
          <ImageWrapper>
            <StyledImage src="/logo-node.png" />
            <StyledImage src="/react-logo.png" />
            <StyledImage src="/HTML5-logo.png" />
          </ImageWrapper>
        </Banner>
      </Wrapper>
    </Container>
  );
};

export default TechSection;
