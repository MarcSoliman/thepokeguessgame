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
`;
export const StyledQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0;
  margin-top: 50px;
`;
export const StyledQuestionHeader = styled.h3`
  font-size: 48px;
  color: #fff;
  margin: 0;
  margin-bottom: 20px;
`;
export const StyledQuestion = styled.h4`
  font-size: 48px;
  color: #fff;
  margin: 0;
`;
export const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTitleBar = styled.div`
  width: 900px;
  height: 140px;
  background: linear-gradient(
    180.76deg,
    rgba(251, 189, 70, 0) -5.2%,
    #fbbd46 47.51%,
    #fcc63d 99.34%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 61px 61px;
  box-shadow: 0px 33px 20px -23px rgba(163, 80, 4, 0.25); ;
`;

export const StyledTitle = styled.h1`
  font-size: 64px;
  color: #fff;
`;
export const StyledBackgroundContainer = styled.div`
  background-image: url("Background.png");
  height: 100vh;
`;
