import {
  Button,
  Carousel,
  CheckBox,
  Icon,
  ImageFrame,
  IntroTitle,
  Label,
  LoginButton,
  Radio,
  TableHeader,
  TextArea,
  TextBox,
} from "@/components/atoms";
import {
  IntroInfo,
  IntroNav,
  Slider,
  TableViewHeader,
  TableViewRow,
} from "@/components/molecules";
import {
  EditorContent,
  EmptyDocs,
  IntroCarousel,
  PathSideToolBar,
  SearchBar,
} from "@/components/organisms";

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
                variant="intronav"
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
          <Wrapper>
            <b>CheckBox</b>
            <div>
              <CheckBox checked={false} />
            </div>
            <div>
              <CheckBox checked={true} />
            </div>
          </Wrapper>
          <Wrapper>
            <b>Icon</b>
            <div>
              <Icon icon="wind" iconType="rr" size="5xl" />
            </div>
          </Wrapper>
          <Wrapper>
            <b>ImageFrame</b>
            <div>
              <ImageFrame />
            </div>
          </Wrapper>
          <Wrapper>
            <b>Label</b>
            <div>
              <Label />
            </div>
          </Wrapper>
          <Wrapper>
            <b>TextArea</b>
            <div>
              <TextArea variant="email" />
            </div>
          </Wrapper>
          <Wrapper>
            <b>LoginButton</b>
            <div>
              <div>
                <LoginButton text="로그인" />
              </div>
              <div>
                <LoginButton text="회원가입" />
              </div>
            </div>
          </Wrapper>
          <Wrapper>
            <b>IntroTitle</b>
            <div>
              <IntroTitle title="Test" />
            </div>
          </Wrapper>
          <Wrapper>
            <b>Radio</b>
            <div>
              <Radio checked={true} />
            </div>
          </Wrapper>
          <Wrapper>
            <b>TableHeader</b>
            <div tw="border-b-2 border-b-blue-700 h-[3.5rem]  items-center">
              <TableHeader label="내 보관함" height="3.5rem" size="2xl" />
            </div>
          </Wrapper>
          <Wrapper>
            <b>TextBox</b>
            <div>
              <TextBox label="TextBox" />
            </div>
          </Wrapper>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <h1>Molecules</h1>
          <Wrapper>
            <b>IntroInfo</b>
            <div>
              <IntroInfo currentSlide={0} />
            </div>
          </Wrapper>
          <Wrapper>
            <b>IntroNav</b>
            <div>
              <IntroNav />
            </div>
          </Wrapper>
          <Wrapper>
            <b>Slider</b>
            <div>
              <Slider />
            </div>
          </Wrapper>
          <Wrapper>
            <b>TableViewHeader</b>
            <div>
              <TableViewHeader
                isBookmarkActive={true}
                labels={lables}
                isAsc={true}
              />
            </div>
          </Wrapper>
          <Wrapper>
            <b>TableViewRow</b>
            <div>
              <TableViewRow key={0} isBookmarkActive={true} />
            </div>
          </Wrapper>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <h1>Organisms</h1>
          <Wrapper>
            <b>EditorContent</b>
            <div>
              <EditorContent />
            </div>
          </Wrapper>
          <Wrapper>
            <b>EmptyDocs</b>
            <div>
              <EmptyDocs />
            </div>
          </Wrapper>
          <Wrapper>
            <b>IntroCarousel</b>
            <div>
              <IntroCarousel />
            </div>
          </Wrapper>
          <Wrapper>
            <b>PathSideToolBar</b>
            <div>
              <PathSideToolBar />
            </div>
          </Wrapper>
          <Wrapper>
            <b>SearchBar</b>
            <div>
              <SearchBar />
            </div>
          </Wrapper>
        </div>
      </Wrapper>
    </>
  );
};

export default Test;
