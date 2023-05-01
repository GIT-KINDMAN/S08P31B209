import StyledTextArea from "./TextArea.styled";
import { InputProps } from "./TextArea.types";
import "@flaticon/flaticon-uicons/css/all/all.css";

const TextArea = ({ variant }: InputProps) => {
  return (
    <>
      <div>
        {/* {variant == "login" ? (
          <i className="fi fi-sr-envelope" style={{ zIndex: 1 }}></i>
        ) : null} */}

        {variant === "text" ? (
          <StyledTextArea variant={"text"} placeholder="아이디(이메일) " />
        ) : null}

        {variant === "password" ? (
          <StyledTextArea
            type="password"
            variant={"password"}
            placeholder="비밀번호"
            autoComplete="current-password"
          />
        ) : null}
        {variant === "edit" ? (
          <StyledTextArea variant={"edit"}></StyledTextArea>
        ) : null}
      </div>
    </>
  );
};

export default TextArea;
