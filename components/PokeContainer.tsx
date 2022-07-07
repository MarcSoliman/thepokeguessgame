import styled from "styled-components";

function PokeContainer({ pokemonImage }: any) {
  const StyledPokeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    background-color: #fff;
    border-radius: 28px;
    margin: 20px;
    margin-left: 60px;
    margin-right: 60px;
  `;
  return (
    <StyledPokeContainer>
      <img src={pokemonImage} />
    </StyledPokeContainer>
  );
}

export default PokeContainer;
