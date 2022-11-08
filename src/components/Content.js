import { useContext } from "react";
import Appcontext from "../context/Appcontext";
import Accordion from "./Accordion";
import styled from "styled-components";
function Content({ type, title, children, path }) {
  const { selectedPost, setSelectedPost, setOpenPost, openPost } =
    useContext(Appcontext);

  function selectedFunction() {
    setSelectedPost(path);

    if (!openPost.includes(path)) {
      setOpenPost([...openPost, path]);
    }
  }

  return type === "directory" ? (
    <Accordion title={`📂${title}`}>
      {children?.map((one, index) => (
        <Content {...one} key={index} />
      ))}
    </Accordion>
  ) : (
    <PostWrap
      onClick={selectedFunction}
      className={selectedPost === path ? "selected" : ""}
    >
      &nbsp;&nbsp;&nbsp;&nbsp; 📝{title}
    </PostWrap>
  );
}
export default Content;

const PostWrap = styled.div`
  padding: 5px 0;
  cursor: pointer;

  &:not(.selected):hover {
    background-color: ${({ theme }) => theme.color.third};
  }
  &.selected {
    background-color: ${({ theme }) => theme.color.third};
  }
`;
