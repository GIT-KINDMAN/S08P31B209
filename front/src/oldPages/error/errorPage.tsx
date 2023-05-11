// 개발 단계에서 사용되고 개발 외 단계에선 다른 페이지로 교체해야 함
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  // https://stackoverflow.com/questions/75944820 참고
  // tsconfig에 compiler option에 "useUnknownInCatchVariables": true를 추가
  // error는 unknown 타입으로 정의 되어 있으므로 typeScript에서 사용하려면 다음과 같은 방법을 취함
  // unknown인 이유는 error의 정의 타입을 커스텀 할 수 있도록 하기 위함
  // const error의 타입을 unknown으로 정의
  const error: unknown = useRouteError();
  // .error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {/* as를 통한 다운 캐스팅을 사용해 정의한 타입에 맞게 에러 코드를 처리 */}
          {(error as { statusText?: string })?.statusText ||
            (error as Error)?.message}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
