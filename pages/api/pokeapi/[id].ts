import { NextApiRequest, NextApiResponse } from "next";

const baseUrlBasic = process.env.POKE_API + "/"!;
const baseUrl = process.env.POKE_API + "-species/"!;

interface RelevantPokemonData {
  sprite: string;
  name: string;
  abilities: object;
  type: string;
  weight: string;
  height: string;
  happiness: string;
  legendaryStatus: string;
}

export default async function Id(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const result = await fetch(baseUrlBasic + id);
  const data = await result.json();

  const advancedResult = await fetch(baseUrl + id);
  const advancedData = await advancedResult.json();

  const relevantData: RelevantPokemonData = {
    sprite: data.sprites.front_default,
    name: data.name,
    abilities: data.abilities,
    type: data.types[0].type.name,
    weight: data.weight,
    height: data.height,
    happiness: advancedData.base_happiness,
    legendaryStatus: advancedData.is_legendary,
  };

  res.status(200).json(relevantData);
}
