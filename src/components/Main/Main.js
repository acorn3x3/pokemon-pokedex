import { usePokemon } from '../../hooks/usePokemon';
import PokemonCard from '../PokemonCard/PokemonCard';
import Select from '../Select/Select';

export default function Main() {
  const { pokemon, types, handleTypeChange } = usePokemon();

  return (
    <>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <div className="main">
        {pokemon.map((poke) => (
          <PokemonCard key={poke._id} {...poke}></PokemonCard>
        ))}
      </div>
    </>
  );
}
