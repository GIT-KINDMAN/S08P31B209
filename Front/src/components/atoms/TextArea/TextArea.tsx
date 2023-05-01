import StyledTextArea from "./TextArea.styled";
import { InputProps } from "./TextArea.types";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { useState } from "react";

const TextArea = ({ variant }: InputProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkArea = () => {
    setIsChecked(!isChecked);
  };
  const [capsLockFlag, setCapsLockFlag] = useState(false);
  const checkCapsLock = (e: any) => {
    let capsLock = e.getModifierState("CapsLock");
    setCapsLockFlag(capsLock);
  };

  // TextArea에 적은 value값
  const [inputText, setInputText] = useState("");

  return (
    <>
      <div>
        {/* {variant == "login" ? (
          <i className="fi fi-sr-envelope" style={{ zIndex: 1 }}></i>
        ) : null} */}
        {/* <StyledTextArea /> */}
        {variant === "default" ? (
          <StyledTextArea placeholder={variant}></StyledTextArea>
        ) : null}

        {/* 문자 입력 */}
        {variant === "email" ? (
          <StyledTextArea
            variant={variant}
            placeholder={variant}
            onChange={(e) => {
              setInputText(e.target.value), console.log(inputText);
            }}
            onClick={checkArea}
          />
        ) : null}

        {/* 비밀번호 입력시 */}
        {variant === "password" ? (
          <div>
            <StyledTextArea
              type="password"
              variant={variant}
              placeholder={variant}
              autoComplete="current-password"
              onKeyDown={(e) => checkCapsLock(e)}
              onChange={(e) => {
                setInputText(e.target.value), console.log(inputText);
              }}
              capsLockFlag={capsLockFlag}
            />
            {capsLockFlag == true ? (
              <span
                style={{
                  width: "80px",
                  padding: "5px",
                  fontSize: "8px",
                  fontWeight: "bold",
                  color: "RED",
                  verticalAlign: "middle",
                  borderRadius: "0.5rem",
                }}
              >
                {capsLockFlag ? "Caps Lock On" : "Caps Lock Off"}
              </span>
            ) : null}
          </div>
        ) : null}

        {/* 보관함 내 문서이름 변경시 */}
        {variant === "edit" ? (
          <StyledTextArea
            variant={variant}
            onChange={(e) => {
              setInputText(e.target.value), console.log(inputText);
            }}
            placeholder="기존 파일명"
          ></StyledTextArea>
        ) : null}
      </div>
    </>
  );
};

export default TextArea;
