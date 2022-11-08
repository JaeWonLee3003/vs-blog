import React, { useContext } from "react";
import styled from "styled-components";
import Appcontext from "../context/Appcontext";

function PostWrap({ title, path, isClose }) {
  const { selectedPost, setSelectedPost, setOpenPost, openPost } =
    useContext(Appcontext);

  function selectedFunction() {
    setSelectedPost(path);

    if (!openPost.includes(path)) {
      setOpenPost([...openPost, path]);
    }
  }

  return (
    <PostWrapstyled
      onClick={selectedFunction}
      className={selectedPost === path ? "selected" : ""}
    >
      &nbsp;&nbsp;
      <span className={isClose && selectedPost === path ? "visible" : ""}>
        &#215;
      </span>
      &nbsp;&nbsp; 📝{title}
    </PostWrapstyled>
  );
}

export default PostWrap;

const PostWrapstyled = styled.div`
  padding: 5px 0;
  cursor: pointer;
  position: relative;

  &:not(.selected):hover {
    background-color: #3c3c3c;
  }
  &.selected {
    background-color: #505050;
  }

  > span {
    top: 3px;
    left: 5px;
    position: absolute;
    display: none;

    &.visible {
      display: block;
    }
  }
`;
