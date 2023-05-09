import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black`);

const PdfViewer = () => {
  return (
    <Wrapper>
      <div>PDF Viwer</div>
    </Wrapper>
  );
};

export default PdfViewer;
