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

  image-rendering: optimizeSpeed; /* STOP SMOOTHING, GIVE ME SPEED  */
  image-rendering: -moz-crisp-edges; /* Firefox                        */
  image-rendering: -o-crisp-edges; /* Opera                          */
  image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
  image-rendering: pixelated; /* Chrome */
  image-rendering: optimize-contrast; /* CSS3 Proposed                  */
  -ms-interpolation-mode: nearest-neighbor; /* IE8+                           */
  transition: all 0.3s ease-out;
  :hover {
    cursor: pointer;

    width: 140%;
    height: 140%;
  }

  :active {
    width: 120%;
    height: 120%;
  }
  animation-timing-function: cubic-bezier(1, 1, 1, 0.75);

  &.load-anim {
    animation: loadin 2s;
  }

  @keyframes loadin {
    0% {
      width: 0%;
      height: 50%;
    }
    85% {
      width: 140%;
      height: 140%;
    }
    90% {
      width: 100%;
      height: 100%;
    }
    100% {
      width: 120%;
      height: 120%;
    }
  }
`;

type Props = {
  pokemonImageRight: string;
  pokemonImageLeft: string;
  selectedPokemon: any;
  pokemonRName: string;
  pokemonLName: string;
  winLose: any;
  randImgKey: any;
};

let loadAnim = "load-anim ";
let randImgKey: number;

function PokeContainer({
  pokemonImageRight,
  pokemonImageLeft,
  selectedPokemon,
  pokemonRName,
  pokemonLName,
  winLose,
  randImgKey,
}: Props) {
  const hideImg = () => {
    if (pokemonImageRight == undefined || pokemonImageLeft == undefined) {
      loadAnim = "";
      return true;
    } else {
      loadAnim = "load-anim ";

      return false;
    }
  };

  const reviewAnswer = (pokemon: string) => {
    if (pokemon !== selectedPokemon.name) {
      winLose("lose");
    } else {
      winLose("win");
    }
  };
  return (
    <StyledWrapper>
      <StyledPokeContainer>
        <StyledPokemonImage
          key={randImgKey}
          src={pokemonImageLeft}
          alt=" "
          hidden={hideImg()}
          className={loadAnim}
          onClick={() => reviewAnswer(pokemonLName)}
        />
      </StyledPokeContainer>
      <StyledPokeball src="Pokeball.svg" width={140} />
      <StyledPokeContainer>
        <StyledPokemonImage
          key={randImgKey}
          src={pokemonImageRight}
          alt=" "
          hidden={hideImg()}
          className={loadAnim}
          onClick={() => reviewAnswer(pokemonRName)}
        />
      </StyledPokeContainer>
    </StyledWrapper>
  );
}

export default PokeContainer;
