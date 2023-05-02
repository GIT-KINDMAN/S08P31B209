import StyledIcon from "./Icon.styled";
import { InputProps } from "./Icon.types";

import tw, { css } from "twin.macro";

const Icon = ({
  icon = "home",
  size = "md",
  iconType = "rs",
  iconColor = tw`text-black`,
}: InputProps) => {
  const iconName = "fi fi-" + { iconType }.iconType + "-" + { icon }.icon;

  let color = iconColor;
  if (typeof iconColor == "string") {
    color = css`
      color: ${iconColor};
    `;
  }

  return (
    <>
      <StyledIcon
        className={iconName}
        iconColor={color}
        size={size}
      ></StyledIcon>
    </>
  );
};
export default Icon;
