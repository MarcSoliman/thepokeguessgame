import React from "react";
import { StyledQuestionWrapper } from "./styles.js";
import { StyledQuestionHeader } from "./styles.js";
import { StyledQuestion } from "./styles.js";

type Props = {
  GeneratedQuestion: string;
};

function Question({ GeneratedQuestion }: Props) {
  return (
    <StyledQuestionWrapper>
      <StyledQuestionHeader>Which Pokemon</StyledQuestionHeader>
      <StyledQuestion>{GeneratedQuestion}</StyledQuestion>
    </StyledQuestionWrapper>
  );
}

export default Question;
