import { usePokemon } from '../../hooks/usePokemon';
import PokemonCard from '../PokemonCard/PokemonCard';

export default function Main() {
  const pokemon = usePokemon();

  return (
    <div>
      {pokemon.map((poke) => (
        <PokemonCard key={poke._id}>{poke.pokemon}</PokemonCard>
      ))}
    </div>
  );
}
