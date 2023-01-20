import { usePokemon } from '../../hooks/usePokemon';
import PokemonCard from '../PokemonCard/PokemonCard';
import Select from '../Select/Select';
import './Main.css';

export default function Main() {
  const { pokemon, types, handleTypeChange, isLoading } = usePokemon();

  if (isLoading) {
    return (
      <article>
        <p className="loading">Loading...</p>
      </article>
    );
  }

  return (
    <main className="main">
      <Select types={types} handleTypeChange={handleTypeChange} />
      <div className="pokemon">
        {pokemon.map((poke) => (
          <PokemonCard key={poke._id} {...poke}></PokemonCard>
        ))}
      </div>
    </main>
  );
}
