import React, { useContext } from "react";
import styled from "styled-components";
import Appcontext from "../context/Appcontext";

function PostWrap({ title, path, isClose }) {
  const {
    selectedPost,
    setSelectedPost,
    setOpenPost,
    openPost,
    setSelectedTag,
  } = useContext(Appcontext);

  function selectedFunction() {
    setSelectedPost(path);
    setSelectedTag(null);

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
      <span
        className={isClose && selectedPost === path ? "visible" : ""}
        onClick={(e) => {
          e.stopPropagation();
          const openPostFilter = openPost.filter((one) => one !== path);
          setOpenPost(openPostFilter);
          setSelectedPost(
            openPostFilter.length !== 0 ? openPostFilter[0] : null
          );
        }}
      >
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
    background-color: ${({ theme }) => theme.color.third};
  }
  &.selected {
    background-color: ${({ theme }) => theme.color.third};
  }

  &:hover > span {
    display: block;
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
