import React, { useContext, useState } from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion";
import {
  VscFile,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
} from "react-icons/vsc";
import Content from "../components/Content";
import AppContext from "../context/Appcontext";
import { getPostOne } from "../common/common.function";
import PostWrap from "../components/PostWrap";

function Main() {
  const [selected, setSelected] = useState(null);
  const {
    setSelectedPost,
    selectedPost,
    postData,
    openPost,
    setOpenPost,
    theme,
    setTheme,
  } = useContext(AppContext);

  const listArr = [
    {
      icon: <VscFile size={24} />,
      path: "EXPLORER",
      content: (
        <>
          <Accordion title="OPEN POSTS" isBold={true} initialexpansion={true}>
            {openPost.map((one, index) => {
              const data = getPostOne(postData, one);
              return (
                <PostWrap
                  path={data.path}
                  title={data.title}
                  key={index}
                  isClose={true}
                ></PostWrap>
              );
            })}
          </Accordion>

          <Accordion title="VSCODE" isBold={true} initialexpansion={true}>
            {postData.map((one, index) => (
              <Content {...one} key={index} />
            ))}
          </Accordion>
        </>
      ),
    },
    {
      icon: <VscSearch size={22.4} />,
      path: "SEARCH",
    },
    {
      icon: <VscSourceControl size={22.4} />,
      path: "POSTING LOG",
    },
    {
      icon: <VscDebugAlt size={22.4} />,
      path: "RUN AND DEBUG",
    },
    {
      icon: <VscExtensions size={22.4} />,
      path: "EXTENSIONS",
    },
  ];

  return (
    <Wrap>
      <LeftBar>
        <div>
          {listArr.map((one, index) => (
            <IconWrap
              selected={selected === index}
              onClick={() => setSelected(selected === index ? null : index)}
              key={index}
            >
              {one.icon}
            </IconWrap>
          ))}
        </div>
        <div>
          <div
            className={theme}
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          ></div>
        </div>
      </LeftBar>
      {selected !== null && listArr[selected] && (
        <LeftContent>
          <p>{listArr[selected]?.path}</p>
          {listArr[selected].content}
        </LeftContent>
      )}
      <RightWrap selected={selected}>
        <RightHeader>
          {openPost.map((one, index) => {
            const data = getPostOne(postData, one);
            return (
              <div
                className={selectedPost === one ? "selected" : ""}
                onClick={() => {
                  setSelectedPost(data.path);
                }}
                key={index}
              >
                📝{data.title}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    const openPostFilter = openPost.filter(
                      (one) => one !== data.path
                    );
                    setOpenPost(openPostFilter);
                    setSelectedPost(
                      openPostFilter.length !== 0 ? openPostFilter[0] : null
                    );
                  }}
                >
                  x
                </span>
              </div>
            );
          })}
        </RightHeader>
        <RightContent selected={selectedPost}>
          {(() => {
            const data = getPostOne(postData, selectedPost);

            return (
              <>
                <p>{data?.path}</p>
                <div>
                  <h1>{data?.title}</h1>
                  <p>JaeWon_3 | {data?.data?.data}</p>
                  <p>
                    {data?.data?.tag.map((one, index) => {
                      <span key={index}>{one}</span>;
                    })}
                  </p>
                  <div>{data?.data?.content}</div>
                </div>
              </>
            );
          })()}
        </RightContent>
      </RightWrap>
    </Wrap>
  );
}

export default Main;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  cursor: pointer;
  border-left: ${({ selected }) => (selected ? 2 : 0)}px solid white;

  > svg {
    color: ${({ selected }) => (selected ? "white" : "#7a7a7a")};
  }
`;
const Wrap = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.third};
`;
const LeftBar = styled.div`
  height: 100%;
  width: 50px;
  min-width: 50px;
  background-color: ${({ theme }) => theme.color.third};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  > div:last-child {
    padding-bottom: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    > div {
      height: 42px;
      width: 24px;
      //border: 1px solid ${({ theme }) => theme.color.text};
      background: ${({ theme }) => theme.color.primary};
      border-radius: 50px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background-color: ${({ theme }) => theme.color.font};
        transition: 0.3s;
      }
      &.light::after {
        top: 20px;
      }
    }
  }
`;
const LeftContent = styled.div`
  width: 320px;
  min-width: 320px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 10px;

  > p {
    padding-bottom: 15px 0 0 10px;
    color: ${({ theme }) => theme.color.font};
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`;
const RightContent = styled.div`
  background-color: ${({ theme }) => theme.color.third};
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;

  > p {
    color: #7a7a7a;
    width: 100%;
  }

  > div {
    width: 100%;
    max-width: 600px;
  }
`;

const RightWrap = styled.div`
  width: ${({ selected }) =>
    selected === null ? "calc(100% - 50px)" : "calc(100% - 320px - 50px)"};

  @media (max-width: 540px) {
    display: ${({ selected }) => (selected === null ? "block" : "none")};
  } ;
`;
const RightHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: ${({ theme }) => theme.color.secondary};
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  &:hover::-webkit-scrollbar {
    display: block;
  }

  > div {
    width: 150px;
    min-width: 150px;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.secondary};
    position: relative;
    cursor: pointer;

    &.selected {
      background-color: ${({ theme }) => theme.color.third};
    }

    &:not(.selected) > span {
      display: none;
    }

    &:hover > span {
      display: block;
    }

    > span {
      position: absolute;
      right: 15px;
      top: 10px;
    }
  }
`;
