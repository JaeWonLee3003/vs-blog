import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion";
import Appcontext from "../context/Appcontext";

function Search() {
  const { postData, setSelectedTag } = useContext(Appcontext);
  const [tagData, setTagdata] = useState([
    {
      tagTitle: "Tech",
      count: 3,
      postArr: [],
    },
    {
      tagTitle: "일상",
      count: 3,
      postArr: [],
    },
    {
      tagTitle: "영상",
      count: 3,
      postArr: [],
    },
    {
      tagTitle: "일상",
      count: 3,
      postArr: [],
    },
  ]);

  useEffect(() => {
    const tempArr = [];

    searcTagFnc(postData);

    function searcTagFnc(notPostDataarr) {
      notPostDataarr.map((nowPostData) => {
        if (nowPostData.type === "post") {
          nowPostData.data.tag?.map((tag) => {
            const tempTarget = tempArr.find((temp) => tag === temp.tagTitle);

            if (tempTarget) {
              tempTarget.count += 1;
            } else {
              tempArr.push({
                tagTitle: tag,
                count: 1,
                postArr: [],
              });
            }
          });
        } else {
          // 디렉토리일 경우 처리
          nowPostData.children && searcTagFnc(nowPostData.children);
        }
      });
    }
    setTagdata(tempArr);
  }, []);
  return (
    <Accordion title="Tags" initialexpansion isBold>
      <TagWrap>
        {tagData.map((one, index) => (
          <Tag
            key={index}
            onClick={() => {
              setSelectedTag(one.tagTitle);
            }}
          >
            {one.tagTitle}
            <span>{one.count}</span>
          </Tag>
        ))}
      </TagWrap>
    </Accordion>
  );
}

export default Search;

const TagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  padding: 18px;
  margin: 5px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.third};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }

  > span {
    color: red;
  }
`;
