import MainContainer from "./MainContainer";
import Question from "./Question";

type Props = {
  pokemonLImage: string;
  pokemonRImage: string;
  GeneratedQuestion: string;
  selectedPokemon: any;
  pokemonRName: string;
  pokemonLName: string;
  winLose: any;
};

function PokeGuessApp({
  pokemonLImage,
  pokemonRImage,
  GeneratedQuestion,
  selectedPokemon,
  pokemonRName,
  pokemonLName,
  winLose,
}: Props) {
  return (
    <div>
      <MainContainer
        pokemonImageLeft={pokemonLImage}
        pokemonImageRight={pokemonRImage}
        selectedPokemon={selectedPokemon}
        pokemonRName={pokemonRName}
        pokemonLName={pokemonLName}
        winLose={winLose}
      />
      <Question GeneratedQuestion={GeneratedQuestion} />
    </div>
  );
}

export default PokeGuessApp;
