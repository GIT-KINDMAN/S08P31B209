import DocDoc from "../../../assets/DocDoc.png";
// import { Button } from "../../atoms/index";
import { Logo, Nav } from "./Intro.styled";

// import { useNavigate } from "react-router-dom";

const IntroNav = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <Nav style={{ zIndex: 15 }} />
      <Logo src={DocDoc} />
      <div
        style={{ textAlign: "right", zIndex: 16, position: "fixed", right: 0 }}
      >
        {/* <Button
          label={"로그인"}
          variant={"intronav"}
          size={"large"}
          icon={"none"}
          onClick={() => navigate("/login")}
        ></Button> */}
      </div>
    </div>
  );
};

export default IntroNav;
