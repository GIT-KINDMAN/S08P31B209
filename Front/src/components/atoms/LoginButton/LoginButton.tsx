import { StyledLoginButton } from "./LoginButton.styled";

const LoginButton: React.FC<{ text: string }> = (props) => {
  console.log(props);
  return (
    <div>
      <StyledLoginButton text={props.text}>{props.text}</StyledLoginButton>
    </div>
  );
};

export default LoginButton;
