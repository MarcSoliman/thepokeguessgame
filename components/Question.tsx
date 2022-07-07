import React from "react";
import styled from "styled-components";

type Props = {
  GeneratedQuestion: string;
};

function Question({ GeneratedQuestion }: Props) {
  const StyledQuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0;
    margin-top: 50px;
  `;
  const StyledQuestionHeader = styled.h3`
    font-size: 48px;
    color: #fff;
    margin: 0;
    margin-bottom: 20px;
  `;
  const StyledQuestion = styled.h4`
    font-size: 48px;
    color: #fff;
    margin: 0;
  `;

  return (
    <StyledQuestionWrapper>
      <StyledQuestionHeader>Which Pokemon</StyledQuestionHeader>
      <StyledQuestion>{GeneratedQuestion}</StyledQuestion>
    </StyledQuestionWrapper>
  );
}

export default Question;
