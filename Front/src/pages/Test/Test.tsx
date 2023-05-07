import { Button, Carousel, TableHeader } from "@/components/atoms";
import { TableViewHeader, TableViewRow } from "@/components/molecules";
import { EmptyDocs, PathSideToolBar, SearchBar } from "@/components/organisms";

import LogoImg from "../../assets/DocDoc.png";

import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black flex justify-center`);

// const tableData: string[] = [
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
// ]; // 시험용 임시데이터
const tableData: string[] = [];
const lables: string[] = [
  "문서 이름",
  "상태",
  "문서 수정일",
  "문서 공유일",
  "문서 마감일",
  "더보기",
];

const Test = () => {
  return (
    <>
      <Wrapper>
        <div>
          <h1>Atoms</h1>
          <Wrapper>
            <b>TableHeader</b>
            <div>
              {" "}
              <TableHeader label="내 보관함" height="3.5rem" size="2xl" />
            </div>
          </Wrapper>
          <Wrapper>
            <b>Button</b>
            <div>
              <Button
                label="button"
                variant="primary"
                icon="test"
                size="small"
              />
              <Button
                label="button"
                variant="secondary"
                icon="test"
                size="small"
              />
              <Button
                label="button"
                variant="mainnav"
                icon="test"
                size="small"
              />
            </div>
          </Wrapper>
          <Wrapper>
            <b>Carousel</b>
            <div>
              <Carousel image={LogoImg} />
            </div>
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
