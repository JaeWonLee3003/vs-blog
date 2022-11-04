import React, { useState } from "react";
import styled from "styled-components";
import { HiOutlineDocument } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import Accordion from "./Accordion";

const listArr = [
  {
    icon: <HiOutlineDocument size={32} />,
    path: "explorer",
    content: (
      <>
        <Accordion title="OPEN POSTS" isBold={true}>
          <Accordion title="📂VSCODE" isBold={true}>
            &nbsp;&nbsp;&nbsp;&nbsp;📝asdadsads
          </Accordion>
        </Accordion>
        <Accordion title="VSCODE">
          <Accordion title="📂VSCODE">
            &nbsp;&nbsp;&nbsp;&nbsp;📝asdadsads
          </Accordion>
          <Accordion title="📂VSCODE">
            &nbsp;&nbsp;&nbsp;&nbsp;📝asdasd
          </Accordion>
        </Accordion>
      </>
    ),
  },
  {
    icon: <AiOutlineSearch size={32} />,
    path: "search",
    content: <p>111</p>,
  },
];

function Main() {
  const [selected, setSelected] = useState(0);
  return (
    <Warp>
      <LeftBar>
        {listArr.map((one, index) => (
          <IconWarp
            selected={selected === index}
            onClick={() => {
              setSelected(selected === index ? null : index);
            }}
          >
            {one.icon}
          </IconWarp>
        ))}
      </LeftBar>

      {selected !== null && listArr[selected] && (
        <LeftContent>
          <p>{listArr[selected].path}</p>
          {listArr[selected].content}
        </LeftContent>
      )}
    </Warp>
  );
}

export default Main;

const Warp = styled.div`
  display: flex;
  height: 100vh;
  background-color: rgb(0, 0, 0);
`;
const LeftBar = styled.div`
  height: 100%;
  width: 50px;
  background-color: #333333;
`;
const IconWarp = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  cursor: pointer;

  border-left: ${({ selected }) => (selected ? 2 : 0)}px solid;
  svg {
    color: ${({ selected }) => (selected ? "white" : "a7a7a7")};
  }
`;
const LeftContent = styled.div`
  width: 320px;
  height: 100%;
  background-color: #252526;
  padding: 10px;

  > p {
    color: #7a7a7a;
  }
`;
