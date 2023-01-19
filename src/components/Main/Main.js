import { usePokemon } from '../../hooks/usePokemon';
import PokemonCard from '../PokemonCard/PokemonCard';
import Select from '../Select/Select';

export default function Main() {
  const { pokemon, types } = usePokemon();

  return (
    <>
      <Select types={types} />
      <div className="main">
        {pokemon.map((poke) => (
          <PokemonCard key={poke._id} {...poke}></PokemonCard>
        ))}
      </div>
    </>
  );
}
