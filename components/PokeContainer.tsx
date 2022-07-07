import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const StyledPokeContainer = styled.div`
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

export const StyledPokeball = styled.img`
  display: flex;
`;
export const StyledPokemonImage = styled.img`
  padding: 30px;
  height: 120%;
  width: 120%;
  [src=""] {
    display: none;
  }
  image-rendering: optimizeSpeed; /* STOP SMOOTHING, GIVE ME SPEED  */
  image-rendering: -moz-crisp-edges; /* Firefox                        */
  image-rendering: -o-crisp-edges; /* Opera                          */
  image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
  image-rendering: pixelated; /* Chrome */
  image-rendering: optimize-contrast; /* CSS3 Proposed                  */
  -ms-interpolation-mode: nearest-neighbor; /* IE8+                           */

  animation-timing-function: cubic-bezier(0.075, 1, 0.01, 1);
  &.load-anim {
    animation-duration: 3s;
    animation-name: loadin;
  }

  @keyframes loadin {
    from {
      width: 20%;
      height: 20%;
    }
    to {
      width: 120%;
      height: 120%;
    }
  }
`;

type Props = {
  pokemonImageRight: string;
  pokemonImageLeft: string;
};

let loadAnim = "load-anim";
function PokeContainer({ pokemonImageRight, pokemonImageLeft }: Props) {
  const hideImg = () => {
    if (pokemonImageRight === "" || pokemonImageLeft === " ") {
      loadAnim = "";
      return true;
    } else {
      loadAnim = "load-anim";
      return false;
    }
  };

  return (
    <StyledWrapper>
      <StyledPokeContainer>
        <StyledPokemonImage
          src={pokemonImageRight}
          alt=" "
          hidden={hideImg()}
          className={loadAnim}
        />
      </StyledPokeContainer>
      <StyledPokeball src="Pokeball.svg" width={140} />
      <StyledPokeContainer>
        <StyledPokemonImage
          src={pokemonImageLeft}
          alt=" "
          hidden={hideImg()}
          className={loadAnim}
        />
      </StyledPokeContainer>
    </StyledWrapper>
  );
}

export default PokeContainer;
