import React, { useState } from "react";
import styled from "styled-components";
import { VscChevronRight, VscChevronDown } from "react-icons/vsc";

function Accordion({ title, children, isBold }) {
  const [expended, setExpended] = useState(false);

  return (
    <>
      <AccordionWrap
        onClick={() => {
          setExpended(!expended);
        }}
      >
        {expended ? <VscChevronDown /> : <VscChevronRight />}
        <sapn>{title ? <strong>{title}</strong> : title}</sapn>
      </AccordionWrap>
      {expended && <AccordionContentWrap>{children}</AccordionContentWrap>}
    </>
  );
}
export default Accordion;

const AccordionWrap = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 0.8rem;
  padding: 4px 0px;

  cursor: pointer;

  > span {
    padding-left: 2px;
  }
`;

const AccordionContentWrap = styled.div`
  padding: 5px 0px 0px 20px;
`;
