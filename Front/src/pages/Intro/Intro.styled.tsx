import { styled } from "twin.macro";

const HomePage = styled.div`
  width: full;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const IntroTitle = styled.div`
  position: absolute;
  left: 10vw;
  font-weight: bold;
  font-size: 6vw;
  margin-top: 2vh;
`;

const TitleDocDoc = styled.div`
  top: 2rem;
  font-weight: bold;
  /* font-size: 7vh; */
  animation: bounce 1s infinite;
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-10%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;
const HomePage3 = styled.div`
  width: full;
  display: flex;
  /* min-width: 100vw; */
  min-height: 864px;
  flex-direction: column;

  position: relative;
  background: linear-gradient(to right, #cee2f3, #f9f4ff);
`;

const Page3Title = styled.div`
  position: absolute;
  top: 5rem;
  left: 10rem;
  font-weight: bold;
  font-size: 5vw;
  margin-top: 1.5rem;
  color: #2e6888;
`;

export { HomePage, IntroTitle, TitleDocDoc, HomePage3, Page3Title };
