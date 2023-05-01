import tw, { css, styled, theme } from "twin.macro";

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 864px;
`;

const MainTitle = styled.div`
  position: absolute;
  top: 64px;
  left: 227px;
  font-weight: bold;
  font-size: 80px;
  margin-top: 24px;
`;

const TitleDocDoc = styled.div`
  position: absolute;
  top: 64px;
  left: 227px;
  font-weight: bold;
  font-size: 80px;
  margin-top: 24px;
  animation: bounce 1s infinite;
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;
const HomePage3 = styled.div`
  display: flex;
  height: 864px;
  flex-direction: column;
  position: relative;
  background: linear-gradient(to right, #cee2f3, #f9f4ff);
`;

const Page3Title = styled.div`
  position: absolute;
  top: 80px;
  left: 160px;
  font-weight: bold;
  font-size: 64px;
  margin-top: 24px;
  color: #2e6888;
`;

export { HomePage, MainTitle, TitleDocDoc, HomePage3, Page3Title };
