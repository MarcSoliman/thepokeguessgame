import React, { useEffect, useState } from "react";
import MainContainer from "./MainContainer";
import Question from "./Question";
import axios from "axios";

type Props = {
  pokemonLImage: string;
  pokemonRImage: string;
  GeneratedQuestion: string;
};

function PokeGuessApp({
  pokemonLImage,
  pokemonRImage,
  GeneratedQuestion,
}: Props) {
  return (
    <div>
      <MainContainer
        pokemonImageLeft={pokemonLImage}
        pokemonImageRight={pokemonRImage}
      />
      <Question GeneratedQuestion={GeneratedQuestion} />
    </div>
  );
}

export default PokeGuessApp;
