import { usePokemon } from '../../hooks/usePokemon';
// import PokemonCard from '../PokemonCard/PokemonCard';

export default function Main() {
  const pokemon = usePokemon();

  return (
    <>
      <div className="main">
        {pokemon.map((poke) => (
          <p key={poke._id}>{poke.pokemon}</p>
        ))}
      </div>
    </>
  );
}
