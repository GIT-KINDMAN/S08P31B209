import { TableHeader } from "@/components/atoms";
import { TableViewHeader, TableViewRow } from "@/components/molecules";
import { EmptyDocs, PathSideToolBar, SearchBar } from "@/components/organisms";

import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black flex justify-center`);

const Test = () => {
  return (
    <>
      <Wrapper>
        <div>
          <h1>Atoms</h1>
          <Wrapper>
            TableHeader
            <TableHeader />
          </Wrapper>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <Wrapper> 이메일 입력(필수) </Wrapper>
          <Wrapper> 비밀번호 입력(필수) </Wrapper>
          <Wrapper> 생년월일 입력(필수) </Wrapper>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <Wrapper> 비밀번호 재설정 </Wrapper>
          <Wrapper> 회원가입 </Wrapper>
        </div>
      </Wrapper>
    </>
  );
};

export default Test;
