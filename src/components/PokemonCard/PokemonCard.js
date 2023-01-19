import React from 'react';

export default function PokemonCard({ pokemon, _id, id }) {
  return (
    <div className="PokemonCard">
      <div className="pokemon">{pokemon}</div>
      <div className="_id">{_id}</div>
      <div className="id">{id}</div>
      <image src={`http://www.pokemon.com/us/pokedex/${pokemon}`}></image>
    </div>
  );
}
