import React from "react";
import PokeContainer from "./PokeContainer";
import { StyledContainerWrapper } from "./styles.js";
import { StyledContainer } from "./styles.js";
import { StyledContainerImage } from "./styles.js";

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
