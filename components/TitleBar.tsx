import React from "react";
import { StyledTitleWrapper } from "./styles.js";
import { StyledTitleBar } from "./styles.js";
import { StyledTitle } from "./styles.js";

function TitleBar() {
  return (
    <>
      <StyledTitleWrapper>
        <StyledTitleBar>
          <StyledTitle>The PokéGuess Game</StyledTitle>
        </StyledTitleBar>
      </StyledTitleWrapper>
    </>
  );
}

export default TitleBar;
