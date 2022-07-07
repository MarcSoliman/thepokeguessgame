import { getDisplayName } from "next/dist/shared/lib/utils.js";
import { useEffect, useRef } from "react";
import { StyledPokeContainer } from "./styles.js";
import { StyledPokemonImage } from "./styles.js";
import { StyledPokeball } from "./styles.js";
import { StyledWrapper } from "./styles.js";

type Props = {
  pokemonImageRight: string;
  pokemonImageLeft: string;
};

function PokeContainer({ pokemonImageRight, pokemonImageLeft }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <StyledWrapper>
      <StyledPokeContainer>
        <StyledPokemonImage ref={imgRef} src={pokemonImageRight} alt=" " />
      </StyledPokeContainer>
      <StyledPokeball src="Pokeball.svg" width={140} />
      <StyledPokeContainer>
        <StyledPokemonImage ref={imgRef} src={pokemonImageLeft} alt=" " />
      </StyledPokeContainer>
    </StyledWrapper>
  );
}

export default PokeContainer;
