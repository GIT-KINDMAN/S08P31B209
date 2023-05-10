import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black`);

const DocsBox = () => {
  return (
    <>
      <aside>side bar</aside>
      <Wrapper>
        <header>DocsBox Page</header>
        <main tw="flex flex-row">
          <Wrapper className="sideBar">
            <Wrapper>1</Wrapper>
            <Wrapper>2</Wrapper>
            <Wrapper>3</Wrapper>
          </Wrapper>
          <Wrapper className="Content" tw="bg-lightgray-50">
            <Wrapper className="docsBoxHeader">docsBoxHeader</Wrapper>
            <Wrapper className="searchBar">searchBar</Wrapper>
            <Wrapper className="TableView">
              TableView
              <Wrapper className="TableViewHeader">TableViewHeader</Wrapper>
              <Wrapper className="TableViewRow">TableViewRow</Wrapper>
            </Wrapper>
          </Wrapper>
        </main>
        <footer>Footer</footer>
      </Wrapper>
    </>
  );
};

export default DocsBox;
