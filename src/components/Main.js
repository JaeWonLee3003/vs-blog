import React from "react";
import styled from "styled-components";
import { HiOutlineDocument } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
const listArr = [
  {
    icon: <HiOutlineDocument size={32} />,
    path: "post",
  },
  {
    icon: <AiOutlineSearch size={32} />,
    path: "test",
  },
];

function Main() {
  return (
    <Wrap>
      <LeftBar>
        {listArr.map((one) => (
          <div>{one.icon}</div>
        ))}
      </LeftBar>
    </Wrap>
  );
}

export default Main;

const Wrap = styled.div`
  height: 100vh;
  background-color: aqua;
`;
const LeftBar = styled.div`
  width: 50px;
  height: 100%;
  background-color: #2cfdfd;
`;
const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  cursor: pointer;
`;
