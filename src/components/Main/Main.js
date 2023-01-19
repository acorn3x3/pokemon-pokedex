import { usePokemon } from '../../hooks/usePokemon';
import PokemonCard from '../PokemonCard/PokemonCard';

export default function Main() {
  const pokemon = usePokemon();
  console.log(pokemon);

  return (
    <>
      <div className="main">
        {pokemon.map((poke) => (
          <PokemonCard key={poke._id} {...poke} />
        ))}
        {/* <img src={`http://www.pokemon.com/us/pokedex/${pokemon}`} /> */}
      </div>
    </>
  );
}
