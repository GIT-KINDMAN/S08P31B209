/**
 * Wrapper 정의
 * Wrapper는 상호작용을 위한 최소한의 컴포넌트 단위이다.
 *
 * 1. Wrapper는 크기를 정의할 수 있어야 한다.
 * 2. Wrapper는 외곽선을 정의 할 수 있어야 한다.
 * 3. Wrapper는 색상을 정의 할 수 있어야 한다.
 * 4. 그외의 나머지 속성을 custom 할 수 있어야 한다.
 */
import SWrapper from "./Wrapper.styled";
import { IProps } from "./Wrapper.types";

import "twin.macro";

const Wrapper = ({
  children,
  id,
  className,
  custom,
  isDisabled = false,
  isHidden = false,
  onClick,
}: React.PropsWithChildren<IProps>) => {
  return (
    <>
      <SWrapper
        id={id}
        className={className}
        custom={custom}
        onClick={isDisabled === true ? () => null : onClick}
        hidden={isHidden}
      >
        {children}
      </SWrapper>
    </>
  );
};
export default Wrapper;
