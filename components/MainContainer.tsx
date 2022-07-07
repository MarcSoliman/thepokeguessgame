import React from "react";
import PokeContainer from "./PokeContainer";

import styled from "styled-components";

export const StyledContainerWrapper = styled.div`
  display: flex;
  height: 50%;
  justify-content: center;
  align-items: center;
`;
export const StyledContainer = styled.div`
  display: flex;
  margin-top: 80px;
  box-shadow: 0px 38px 23px -19px rgba(150, 58, 19, 0.21);
  border-radius: 67px;
  border: double 37px transparent;
  background-image: linear-gradient(180deg, #c91ff3 0%, #e4758f 100%),
    linear-gradient(to bottom, rgba(255, 239, 98, 1), rgba(255, 218, 21, 1));
  background-origin: border-box;
  background-clip: content-box, border-box;
  height: 100%;
  width: 60%;
  justify-content: center;
  align-items: center;
`;

export const StyledContainerImage = styled.div`
  display: flex;
  background-image: url("containerimage.png");
  border-radius: 67px;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center; ;
`;

type Props = {
  pokemonImageRight: string;
  pokemonImageLeft: string;
};

function MainContainer({ pokemonImageRight, pokemonImageLeft }: Props) {
  return (
    <StyledContainerWrapper>
      <StyledContainer>
        <StyledContainerImage>
          <PokeContainer
            pokemonImageRight={pokemonImageRight}
            pokemonImageLeft={pokemonImageLeft}
          />
        </StyledContainerImage>
      </StyledContainer>
    </StyledContainerWrapper>
  );
}

export default MainContainer;
