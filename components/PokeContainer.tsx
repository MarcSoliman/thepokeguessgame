import { type } from "os";
import styled from "styled-components";

type Props = {
  pokemonImageRight: string;
  pokemonImageLeft: string;
};

function PokeContainer({ pokemonImageRight, pokemonImageLeft }: Props) {
  const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
  `;

  const StyledPokeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    z-index: 5;
    background-color: #fff;
    border-radius: 28px;
    margin: 20px;
  `;

  const StyledPokeball = styled.img`
    display: flex;
  `;
  const StyledPokemonImage = styled.img`
    padding: 20px;
    height: 100%;
    width: 100%;
  `;
  return (
    <StyledWrapper>
      <StyledPokeContainer>
        <img src={pokemonImageRight} />
      </StyledPokeContainer>
      <StyledPokeball src="Pokeball.svg" width={140} />
      <StyledPokeContainer>
        <img src={pokemonImageLeft} />
      </StyledPokeContainer>
    </StyledWrapper>
  );
}

export default PokeContainer;
