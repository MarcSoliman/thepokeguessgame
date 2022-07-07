import React from "react";
import MainContainer from "./MainContainer";
import Question from "./Question";

function PokeGuessApp() {
  const GeneratedQuestion: string = "Is Heavier?";

  return (
    <div>
      <MainContainer
        pokemonImageLeft="http://localhost:3000/Pokeball.svg"
        pokemonImageRight="http://localhost:3000/Pokeball.svg"
      />
      <Question GeneratedQuestion={GeneratedQuestion} />
    </div>
  );
}

export default PokeGuessApp;
