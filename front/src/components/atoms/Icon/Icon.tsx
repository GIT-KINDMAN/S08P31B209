/**
 * icon 정의
 * icon은 flaticon uicons를 띄우는 최소한의 컴포넌트 단위이다.
 *
 * 1. icon은 크기를 정의할 수 있어야 한다.
 * 2. icon은 아이콘 종류를 정의 할 수 있어야 한다.
 * 3. icon은 아이콘 색상을 정의 할 수 있어야 한다.
 * 4. icon은 onclick 이벤트를 처리할 수 있어야 한다.
 * 5. 그외의 나머지 속성을 custom 할 수 있어야 한다.
 */
import SIcon from "./Icon.styled";
import { IProps } from "./Icon.types";

const Icon = ({
  id,
  className,
  icon = "rs-home",
  size = "md",
  custom,
  isDisabled = false,
  isHidden = false,
  onClick,
}: IProps) => {
  const iconName = className + " fi fi-" + icon;
  return (
    <>
      <SIcon
        id={id}
        className={iconName}
        size={size}
        custom={custom}
        onClick={isDisabled === true ? () => null : onClick}
        hidden={isHidden}
      />
    </>
  );
};
export default Icon;
