import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black flex justify-center`);

const Intro = () => {
  return (
    <>
      <Wrapper>
        <Wrapper tw="mr-auto">DocDocLogo</Wrapper>
        IntroNavbar
        <Wrapper tw="ml-auto">LoginButton</Wrapper>
      </Wrapper>
      <Wrapper>
        <div>
          <Wrapper> Intro-Page1-Text </Wrapper>
          <Wrapper> Intro-Page1-BackgroundImage </Wrapper>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <Wrapper> Intro-Page2-Text </Wrapper>
          <Wrapper> Intro-Page2-BackgroundImage </Wrapper>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <Wrapper> Intro-Page3-Text </Wrapper>
          <Wrapper> Intro-Page3-carousel </Wrapper>
          <Wrapper> Intro-Page3-Text </Wrapper>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <Wrapper> Intro-Page4-Text </Wrapper>
          <Wrapper> Intro-Page4-Image </Wrapper>
          <Wrapper> Intro-Page4-LoginButton </Wrapper>
        </div>
      </Wrapper>
    </>
  );
};

export default Intro;
