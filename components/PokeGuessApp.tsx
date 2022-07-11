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
  randImgKey: any;
};

function PokeGuessApp({
  pokemonLImage,
  pokemonRImage,
  GeneratedQuestion,
  selectedPokemon,
  pokemonRName,
  pokemonLName,
  winLose,
  randImgKey,
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
        randImgKey={randImgKey}
      />
      <Question GeneratedQuestion={GeneratedQuestion} />
    </div>
  );
}

export default PokeGuessApp;
