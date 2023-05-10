import Step from "@/components/atoms/Step/Step";

import { ProgressBar } from "./EditorProgress.styled";

const Progress = () => {
  return (
    <ProgressBar>
      <Step label="템플릿 생성" active={true} />
      <span> &gt; </span>
      <Step label="템플릿 편집" />
      <span> &gt; </span>
      <Step label="연락처 추가" />
      <span> &gt; </span>
      <Step label="완료" />
    </ProgressBar>
  );
};

export default Progress;
